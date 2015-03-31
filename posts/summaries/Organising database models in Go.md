TL;DR

Keep your database layer sane by using composition.  After several experiments my ideal scenario is:

- A models subpackage which contains all model structs
- Use jmoiron's sqlx and modl packages for database interaction
- write (very basic) CRUD with [modl](https://github.com/jmoiron/modl) exposing both [atomic and tx methods](https://gist.github.com/tonyhb/581114ae710dcf3a9369)
- write all other queries using [sqlx](http://github.com/jmoiron/sqlx). Seriously. Use sqlx.
- global exported methods for querying data:
    - Get{$Model} for loading one item by ID (eg. `GetPage`, `GetAuthor`)
    - Find{$Model} for loading a slice (eg. `FindPageByAuthor`)
- core model structs represent database data only
- use composition via embedded structs to add additional data, such as JOIN fields or related models
- use interfaces where possible to DRY up code

Something like this may be an accurate example:

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
