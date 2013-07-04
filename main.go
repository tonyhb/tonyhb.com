package main

import (
	"fmt"
	"net/http"
	"strings"
	"time"
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
		homepage(w, r)
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
			internalError(w, r)
			return
		}
		// Now we can check if it exists again - if not, throw a 404.
		if !Posts.exists(path) {
			notFound(w, r)
			return
		}
	}

	output, err := Posts.read(path)
	if err != nil {
		internalError(w, r)
		return
	}
	fmt.Fprint(w, string(output))
}

// Handles 404 errors.
func notFound(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "404")
}

// Handles internal server errors
func internalError(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "500")
}

// Lists the blog homepage
func homepage(w http.ResponseWriter, r *http.Request) {
	list := Posts.list()

	html := ""
	for _, item := range list {
		time := item["date"].(time.Time)
		html = html + "<article><h1><a href='/" + slug(item["title"].(string)) + "'>" + item["title"].(string) + "</a></h1><time>" + time.Month().String() + "</time>"
	}

	fmt.Fprint(w, html)
	return
}

// Creates a slug from the current title.
func slug(input string) (output string) {
	output = strings.Replace(input, " ", "-", -1)
	output = strings.ToLower(output)
	return
}

