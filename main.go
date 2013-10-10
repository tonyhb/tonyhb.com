package main

import (
	"github.com/hoisie/mustache"
	"github.com/kylelemons/go-gypsy/yaml"

	"fmt"
	"net/http"
	"time"
)

var (
	Posts  postList
	Config *yaml.File
)

func main() {
	// We're going to scan the blog
	var err error
	if Posts, err = Posts.scan(); err != nil {
		panic("Couldn't read from the posts directory.")
	}

	// Open the YAML file and find out which
	Config, err := yaml.ReadFile("config/go-blog.yaml")
	if err != nil {
		panic("Couldn't read the configuration file. Does `config/go-blog.yaml` exist?")
	}
	port, err := Config.Get("port")
	if err != nil {
		port = "8000"
		fmt.Println("Couldn't find a port in the configuration. Using 8000")
	}

	// Run a goroutine which updates the postlists every minute,
	go func() {
		timer := time.NewTicker(time.Second)
		for {
			select {
			case <- timer.C:
				Posts, err = Posts.scan()
			}
		}
	} ();

	fmt.Println("Blog running on port", port)

	http.HandleFunc("/favicon.ico", notFound) // @TODO: Handle the favicon separately: for now, 404 it.
	http.HandleFunc("/posts/", apiPost)
	http.HandleFunc("/posts", apiList)
	http.HandleFunc("/", serve)
	http.ListenAndServe(":"+port, nil)
}

// Accepts incoming requests, checks to see if a blog post exists with the
// given name converts the blogpost to HTML through mustache templates, if the
// blog exists. If it doesn't, we show a 404.
func serve(w http.ResponseWriter, r *http.Request) {
	var err error
	var path string
	if path = r.URL.Path[1:]; path == "" {
		// Show the homepage
		Posts, err = Posts.scan()
		if err != nil {
			internalError(w)
			return
		}
		homepage(w)
		return
	}

	// @TODO: Use YAML file for handling 301 redirects for old blog posts.
	//        This can currently be handled by using nginx/apache as a reverse
	//        proxy and having the web server redirect the client.

	if !Posts.exists(path) {
		// The blog post doesn't exist. Re-scan the directory - it may be a new
		// blog post that hasn't yet been scanned for. Checking here lets us
		// only scan the blog directory when we need to.
		var err error
		if Posts, err = Posts.scan(); err != nil {
			internalError(w)
			return
		}
		// Now we can check if it exists again - if not, throw a 404.
		if !Posts.exists(path) {
			notFound(w, r)
			return
		}
	}

	// Set the human readable date and our parsed markdown. We're calling
	// exported struct methods here instead of mustache because, even though
	// mustache can access them server-side, these methods *aren't* visible
	// to Backbone/JS. We're using the same templates for the front and back
	// end, so this is a necessity.
	post := Posts[path]
	post.Date = post.ParseDate()
	post.Content = post.ParseContent()

	fmt.Fprint(w, mustache.RenderFileInLayout("public/templates/posts/view.html", "public/templates/layout.html", map[string]Post{"post": post}))
}

// Handles 404 errors.
func notFound(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(404)
	fmt.Fprint(w, mustache.RenderFileInLayout("public/templates/errors/404.html", "public/templates/layout.html"))
}

// Handles internal server errors
func internalError(w http.ResponseWriter) {
	w.WriteHeader(500)
	fmt.Fprint(w, mustache.RenderFileInLayout("public/templates/errors/500.html", "public/templates/layout.html"))
}

// Lists the blog homepage
func homepage(w http.ResponseWriter) {
	list := Posts.list()
	fmt.Fprint(w, mustache.RenderFileInLayout("public/templates/posts/list.html", "public/templates/layout.html", map[string]interface{}{"posts": list}))
	return
}
