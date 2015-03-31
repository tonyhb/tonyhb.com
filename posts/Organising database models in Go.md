
Most apps get to a point where simple CRUD and model definitions don't cut it.  Complex queries with LEFT JOINs, aggregate functions and optimizations start to litter your codebase, and if it's not well organised it can be a pain to work with, maintain and add new features to.

After building a few apps and experimenting with a few different methods I've settled on my favourite way of organising database code within go.

## Experimenting with formats

I experimented with two major package formats:

1. everything in one package (`import "github.com/you/project/models"`)
    - good organisation
	- the mainstay of our database code (excluding the below experiment one time)
2. things in subpackages (`import "github.com/you/project/models/{$model}"`)
    - only as an experiment to keep method names clean: <br>`import "models/page"` then `page.Create(p)`
    - fell short with circular dependencies with relationships:<br>`models/page` might rely on `models/author`, but you also want the reverse
    - hacky answer was a subpackage to load relationships: `models/page/pagerels`
    - the code in this format didn't last long *at all* before being ripped out

And, within those organisational packages, I played around with multiple formats:

1. Implementing storage as "clients" [as described in a previous post](http://tonyhb.com/building-a-testable-golang-database-layer)
    - allows you to write to multiple backends, ie. mock and postgres
    - in practice I rarely wrote mocks and could use variable functions to test in those cases ([check my gist for more info](https://gist.github.com/tonyhb/8153e1fe10891c68a8c5))
    - this made code verbose and messy:
        1. you have to keep the mock and storage implementations up to date to for interface compatibility, leaving a lot of no-op methods in the mock interface
        2. you have to select the right "client" to perform operations (eg. `models.GetUserClient().Get(1)`)
2. writing storage directly in each method, using only sql
3. writing storage directly in each method using sqlx and modl (an orm)


## Settling on a format

The resulting format from these experiments is everything in one package and writing storage directly in each method, using a mixture of SQL and ORM via sqlx and modl respectively.  Related models and fields loaded through JOIN queries are handled through composition using embedded structs. In short:


- a models subpackage which contains all model structs
- use jmoiron's sqlx and modl packages for database interaction
- write (very basic) CRUD with [modl](https://github.com/jmoiron/modl) exposing both [atomic and tx methods](https://gist.github.com/tonyhb/581114ae710dcf3a9369)
- write all other queries using [sqlx](http://github.com/jmoiron/sqlx). Seriously. Use sqlx.
- global exported methods for querying data:
    - Get{$Model} for loading one item by ID (eg. `GetPage`, `GetAuthor`)
    - Find{$Model} for loading a slice (eg. `FindPageByAuthor`)
- core model structs represent database data only
- use composition via embedded structs to add additional data, such as JOIN fields or related models
- use interfaces where possible to DRY up code

Here's an example, with some breakdown after:

<pre><code data-language="go">package models

import (
    "github.com/jmoiron/sqlx"
    "github.com/tonyhb/govalidate"
)

type Author struct {
	Name string `json:"name" validate:"NotEmpty"`
}

type Page struct {
	Id       int    `json:"id"`
    AuthorId int    `json:"author_id" validate:"NotZero"               db:"author_id"`
	Name     string `json:"name"      validate:"NotEmpty"`
	Slug     string `json:"slug"      validate:"RegExp:/^[a-z0-9-]+$/"`
	Content  string `json:"slug"      validate:"RegExp:/^[a-z0-9-]+$/"`

	// Each page has join fields and page relations as embedded structs.
	// You can access Page.Author directly.
	PageJoinFields
	PageRelations
}

// This represents Page fields which are loaded via JOIN queries. These fields
// are not stored in the Page table.
type PageJoinFields struct {
    // We want to load the author name for our blog post. However, both Post and Author
    // have a field called "name". SQLx will only set one of these fields. We can
    // run an SQL like so: "SELECT author.name AS author_name"
	AuthorName string `db:"author_name"` // rename the DB field to author_name for raw SQL queries
}

// Represents related models for a specific Page
type PageRelations struct {
	// Embedding allows us to load the category within the same SQL query as
	// selecting the page. If this were a named struct we would have to perform
	// another query.
	// This is a trade-off: validation runs on embedded fields and may break standard
	// page queries. In these situations it's best to use PageJoinFields and copy fields
	// from the author struct directly.
	Category    `json:"category"`
    Comments []*comment `json:"comments"`
}

func (p Page) MarshalJSON() ([]byte, error) {
    // API representation goes here
}

// database methods, such as Create and CreateTx() here.
</code></pre>

### Composing related models and fields via embedded structs

As KeepUpdated evolved, having a monolithic struct encompassing data stored in the model's table *and* JOIN fields was frustrating:

- At a glance it was hard to tell which fields were stored directly in the model's table
- some fields were only set using particular queries due to backend services vs api data needs.

Concerns needed to be separated.

In this example it's easy to see which fields belong directly in the Page table, which fields are queried via JOINs and which related models are available.  This still isn't perfect, and we can go further by making more specific composable structs for particular senarios by embedding Page within another struct if necessary.  Composability via embedding is excellent.

### Mixing ORMs with SQL

ORM saves some repetition and plain old SQL writing with really basic models. It's only used for *really* basic crud.

You should use SQL via SQLx in *every other instance* - even for basic queries with a WHERE clause (`SELECT * FROM x WHERE x.y = z`). SQLx is a *powerhouse* for your writing normal SQL. I wouldn't ever want to write SQL in go without it. Seriously, don't write SQL in go without it. You're hurting yourself.

[Modl](https://github.com/jmoiron/modl) is a fork of (Gorp)[https://github.com/go-gorp/gorp] using SQLx. Now that gorp has its own organisation its internals are using SQLx's reflect subpackage *but* they don't use `sqlx.DB` - they use `sql.DB`. This is annoying as SQLx queries don't work using builtin `sql.DB`. 

Modl uses sqlx everywhere. Which means you can chain transactions across ORM and SQL, if you need it:

<pre><code data-language="go">tx := DB().MustBegin()
if err = SomethingWithORMTx(tx); err != nil {
    return
}
if err = SomethingWithSQLTx(tx); err != nil {
    return
}
return tx.Commit()
</code></pre>

This is pretty ideal: chaining a raw SQL query alongisde an ORM query within the same transaction can be pretty helpful with some API endpoints.

-----

### Further experimentation

Having related models and join fields directly embedded in your main model can be a pain. It can limit ORM use for basic CRUD queries, as Modl will try saving all join fields and models too.

I'd like to experiment with a composite model which incorporates the standard table model, join fields and related models embedded like so:

<pre><code data-language="go">type Page struct {
    PageTable
    PageRelations
    PageJoins
}
</code></pre>

