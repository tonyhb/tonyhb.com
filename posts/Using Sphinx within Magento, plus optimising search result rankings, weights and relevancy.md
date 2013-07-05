If you’ve used a Magento store’s search function or dabbled in Magento
development you'll know that the default Magento search is a steaming pile of
abhorrent, frothy cack which produces search results as irrelevant as Ask
Jeeves. It can't even search by product name without serious pollution in the
results.

Luckily, with the aid of the [Sphinx open source search
engine](http://sphinxsearch.com/), it's not difficult to fix, and I'll walk you
through start to finish in this post, ending with sphinx search in Magento that
kicks serious ass.

This walkthrough builds upon [this forum
post](http://www.magentocommerce.com/boards/main.php/viewthread/219965/),
incorporating field weights and stemming to ensure your results are in prime
condition.

## Step 1: Install Sphinx

Head over to [sphinxsearch.com](http://sphinxsearch.com/) and grab the source
(in this post I’m using 2.0.4, though the process won’t change much in the
future).

Download and compile using `./compile`, `make -j4` and `make -j4 install` (the
-j4 flag speeds up the make/install process on multi-cored CPUs). By default
this will install 3 programs—index, search and searchd—into /usr/local/bin/ and
configuration files in /usr/local/etc/

## Step 2: Configuring Sphinx to work with Magento

There are a **lot** of configuration options for Sphinx, most of which we don’t need to worry about. Here’s my /usr/local/etc/sphinx.conf file that’s working a treat (we’ll cover the sql query after):

    source magento_fulltext {
        type = mysql

        # Host details - ensure you update this to match your settings
        sql_host = localhost
        sql_user = {username}
        sql_pass = {password}
        sql_db   = {database name}
        sql_port = 3306
        sql_sock = /var/lib/mysql/mysql.sock          # Either leave this out for TCP (slightly slower) or update to your sock path!

        # Core settings
        sql_query_pre  = SET NAMES utf8               # We're using UTF-8 encoding so run this before
        sql_query      = SELECT product_id, name, name_attributes, category, data_index FROM sphinx_catalogsearch_fulltext
        sql_query_info = SELECT product_id, name, name_attributes, category, data_index FROM sphinx_catalogsearch_fulltext WHERE product_id=$id
    }

    index fulltext {
        source = magento_fulltext
        path   = /var/data/production.sphinx.index     # Feel free to change

        morphology   = stem_en, metaphone
        min_word_len = 1                               # Indexes all words
        charset_type = utf-8
        blend_chars  = -                               # This presumes people won't type a hyphen into the search bar: quite likely
        blend_mode   = trim_both                       #
        html_strip   = 1                               # Just in case anyone tries to get clever in the admin panel and use HTML
    }

    indexer {
        mem_limit = 1024M                              # Change this to something that suits your server
    }

    searchd {
        read_timeout    = 5
        client_timeout  = 10                           # Make sure you get rid of the 5 minute timeout!
        preopen_indexes = 1
    }

The main things to take note of here are that we’re indexing all words, using stem_en and metaphone morphology to ensure plurals and misspellings/variants are included and that we’re **using a new catalog search table.**

The `catalogsearch_fulltext` table that ships with Magento is pants for picking out the right products because it bundles every searchable attribute into one text block. This means we can’t add weight to the product name, which is absolutely ridiculous. Let’s take a look at our new `sphinx_catalogsearch_fulltext` table we need to create.

## Enter "Field Weights": the answer to our problems

For a good product search we need to rank our results by at least four rows, in order of priority:

1. Product name.
2. Most specific category (ie. we’d record ‘Android Phones’ in a product in ‘Technology’ » ‘Phones’ » ‘Android Phones’)
3. Product name with attributes (black, 32gb etc.)
4. The original `data_index` from Magento

The product name is definitely the most important: if you’re selling a ‘Galaxy Nexus’ and that’s what a user searches for you’d expect it to come up top. The second most important is the most specific category because most users search by categories. Then we have the product name mixed with attributes (so that if a user searches for ’32GB Black Galaxy Nexus’ we can easily find the right product). Finally, we use Magento’s original data_index as the least important factor to show results which have at least some relevance to our search.

Knowing this, we need to add an extra table to our database which adds three columns to the catalogsearch_fulltext table and modify the fulltext search indexer to create these columns for us. Here’s the SQL to create our table:

    CREATE TABLE `sphinx_catalogsearch_fulltext` (
      `product_id` int(10) unsigned NOT NULL,
      `store_id` smallint(5) unsigned NOT NULL,
      `name` varchar(255) NOT NULL,
      `name_attributes` longtext NOT NULL,
      `category` varchar(255) NOT NULL,
      `data_index` longtext NOT NULL,
      PRIMARY KEY (`product_id`,`store_id`),
      FULLTEXT KEY `data_index` (`data_index`)
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8;

##  Indexing our new search fields

Once we have the table to hold our search data we need to modify Magento’s indexer to add the data to these columns. The three files we’re editing are:

1. CatalogSearch/Helper/Data.php
2. CatalogSearch/Model/Mysql4/Fulltext.php
3. CatalogSearch/Model/Mysql4/Fulltext/Engine.php

The helper class formats our indexable data whilst the fulltext engine writes the indexable data to the database. The fulltext class (number 2) glues these together and also performs the actual search.

[View the code on Gist](https://gist.github.com/2727341).

Let’s run through the changes. Note that these are made for a 1.4.1.1 installation (sorry!) but will resemble the changes necessary in future versions.

First, in the helper file, we modified the prepareIndexdata method to return an array of our indexable data. The array now contains our product name, the deepest category the product is a member of and a string of the product name with all non-standard searchable attributes, plus the original index_data. To get the category we’ve modified the method’s parameters, adding an entity ID as the final argument.

Second, we ensured the product’s entity ID was passed to the helper in the `_prepareProductIndex` method. We also modified the actual search functionality in the prepareResult method to use our Sphinx search server. This is explained in the next section.

Third, we ensured the product’s entity ID was passed to the helper in the `prepareEntityIndex` method and we changed the saveEntityIndexes method to allow for our new indexable data. This is the method that saves our indexable data to our new table.

## Modifying Magento’s search functionality to use Sphinx

This is easier than it sounds and is included in the above Gist ([here’s the link again](https://gist.github.com/2727341)). The actual Sphinx logic starts at line 313 (line 56 of the Gist), in the method prepareResult:

    define('SPH_RANK_SPH04', 7);
    define('SPH_RANK_WORDCOUNT', 3);

    // Connect to our Sphinx Search Engine and run our queries
    $sphinx = new SphinxClient();
    $sphinx->SetServer('192.168.100.88', 9312);
    $sphinx->SetMatchMode(SPH_MATCH_EXTENDED);
    $sphinx->setFieldWeights(array(
        'name' => 7,
        'category' => 1,
        'name_attributes' => 3,
        'data_index' => 1
    ));
    $sphinx->setLimits(0, 200, 1000, 5000);

    // $sphinx->SetRankingMode(SPH_RANK_SPH04, 7);
    $sphinx->SetRankingMode(SPH_RANK_PROXIMITY_BM25);
    $sphinx->AddQuery($queryText, "fulltext");
    $results = $sphinx->RunQueries();

    // Loop through our Sphinx results
    foreach ($results as $item)
    {
        if (empty($item['matches']))
            continue;

        foreach ($item['matches'] as $doc => $docinfo)
        {
            // Ensure we log query results into the Magento table.
            $sql = sprintf("INSERT INTO `{$this->getTable('catalogsearch/result')}` "
                    . " (`query_id`, `product_id`, `relevance`) VALUES "
                    . " (%d, %d, %f) "
                    . " ON DUPLICATE KEY UPDATE `relevance` = %f",
                $query->getId(),
                $doc,
                $docinfo['weight']/1000,
                $docinfo['weight']/1000
            );
            $this->_getWriteAdapter()->query($sql, $bind);
        }
    }

(There are two definitions to Sphinx search ranking algorithms because in my Sphinx extension these weren’t defined.)

The code replaces Magento’s search with Sphinx by connecting to the Sphinx server and running the query. We then loop through the results and ensure they’re added to the catalogsearch_result table with their relative weight.

An important line to note is `$sphinx->setLimits(0, 200, 1000, 5000);` – without this Sphinx only returns 20 results. See the [documentation on setLimits](http://php.net/manual/en/sphinxclient.setlimits.php) for more information.

The main talking points are the **match mode, ranking mode and field weights**. These are values that you’ll need to play around with in order to find the best settings for your store. There’s no one size fits all – you will need to log in to your admin panel and view the search stats to get a good feel for how your users search and tweak accordingly.

I’ve found that setting the field weights stacked in the name and attributes favour along with an extended match type and a blend of LCS/BM25 weighting works well for my users. This could work well for you but you will have to see for yourself. This can take some time to perfect!

## A note on Sphinx’s ranking algorithms

Sphinx bundles with [eight ranking algorithms explained in depth in this Sphinx blog post](http://sphinxsearch.com/blog/2010/08/17/how-sphinx-relevance-ranking-works/), which is a great read and will give you a solid understanding for tweaking your results. There are two primary rankers that Sphinx uses: LCS (proximity of words in the search phrase) and BM25 (statistically analysed word count), and two algorithms that you’ll want to use that blend these two well: `SPH_RANK_PROXIMITY_BM25` and `SPH_RANK_SPH04`. These are the two that tend to produce the most relevant results, although with specific datasets and attributes your mileage may vary.

## Further reading

Check out the [Sphinx documentation on weighting](http://sphinxsearch.com/docs/2.0.4/weighting.html) and the [blog post about relevancy rankings](http://sphinxsearch.com/blog/2010/08/17/how-sphinx-relevance-ranking-works/) for more information.

Hopefully this has helped you on your way to solve the problem of Magento search, and if you’ve completed the integration you’ll notice such a huge increase in search result relevancy you’ll be shocked. If you’ve got any feedback on this please feel free to leave a comment.
