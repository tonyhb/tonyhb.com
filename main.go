package main

import (
	"fmt"
	"net/http"
	"github.com/hoisie/mustache"
)

var (
	Posts postList
)

func main() {
	// We're going to scan the blog
	var err error
	if Posts, err = Posts.scan(); err != nil {
		panic("Couldn't read from the posts directory.")
	}

	http.HandleFunc("/favicon.ico", notFound) // @TODO: Handle the favicon separately: for now, 404 it.
	http.HandleFunc("/", serve)
	http.ListenAndServe(":8000", nil) // @TODO: Use YAML for config so the ports are changeable.
}

// Accepts incoming requests, checks to see if a blog post exists with the
// given name converts the blogpost to HTML through mustache templates, if the
// blog exists. If it doesn't, we show a 404.
func serve(w http.ResponseWriter, r *http.Request) {
	var path string
	if path = r.URL.Path[1:]; path == "" {
		// Show the homepage
    Posts.scan();
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

	fmt.Fprint(w, mustache.RenderFileInLayout("public/templates/posts/view.html", "public/templates/layout.html", map[string]Post{"post":Posts[path]}))
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
	fmt.Fprint(w, mustache.RenderFileInLayout("public/templates/posts/list.html", "public/templates/layout.html", map[string]interface{}{"posts":list}))
	return
}
