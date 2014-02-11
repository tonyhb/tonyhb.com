Testing is awesome in go: having a test layer built in rocks. But when writing 
custom SQL—which is almost all the time in Go, unless you're using an 
experimental ORM—it's important to test the database code away from your
application code. This allows you to ensure your database code works well and
allows you to test your controllers/web actions separately with fake data with
no extra input.  Here's an implementation I'm using in
[KeepUpdated](http://keepupdated.co), taken from the guys that built Drone and
SoundCloud
[here](https://groups.google.com/forum/#!topic/golang-nuts/9i01tuVo-1E).

In essence, your web app should import a package which acts as the service layer
for your models. For me, the service layer looks like this:

<pre><code data-language="go">type PageService interface {
	Create(p *Page) error
	Update(p *Page) error
	// ...
}
</code></pre>

You can then implement this interface with SQL-backed storage, or an in-memory
storage for testing:

<pre><code data-language="go">type LivePageService struct{}

func (t LivePageService) Create(p *Page) (err error) {
	// SQL methods here
}

type MockPageService struct{}

func (t MockPageService) Create(p *Page) (err error) {
	// In memory methods here, used for testing the application code
	// without having to worry about SQL code/database management
}
</code></pre>

Then, to get your service, I use a `GetPageService()` method to return a service
for the current environment:

<pre><code data-language="go">func GetPageService() PageService {
	switch ENV {
	case "DEV":
		return MockPageService{}
	case "TESTING", "LIVE":
		return LivePageService{}
	}
}
</code></pre>

You can test SQL by directly creating a LivePageService{} and calling its
methods, and the rest of the application uses the MockPageService{}, allowing
you to return errors and data without having to connect to your database.

This means your web app tests don't ever have to worry itself with SQL - all
they need to do is handle appropriate errors thrown from your service layer.
Just like KFC: So good.

If you've got any improvements with this or see any problems feel free to let me
know. Very much interested in seeing how you run your SQL testing in Go, and
other languages.
