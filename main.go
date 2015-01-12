package main

import (
	"github.com/hoisie/mustache"
	"github.com/kylelemons/go-gypsy/yaml"
	"github.com/madari/goskirt"
	log "github.com/sirupsen/logrus"

	"fmt"
	"net/http"
)

var (
	config   *yaml.File
	port     string
	posts    Posts
	markdown goskirt.Goskirt
)

func init() {
	log.SetLevel(log.DebugLevel)
	// log.SetFormatter(&log.JSONFormatter{})

	// Open the YAML file and find out which
	config, err := yaml.ReadFile("config/go-blog.yaml")
	if err != nil {
		log.WithFields(log.Fields{
			"error": err,
		}).Panic("Couldn't read the configuration file. Does `config/go-blog.yaml` exist?")
	}

	port, err = config.Get("port")
	if err != nil {
		port = "8000"
		log.Warn("No port found in configuration. Using 8000")
	}

	markdown = goskirt.Goskirt{
		goskirt.EXT_AUTOLINK | goskirt.EXT_STRIKETHROUGH,
		goskirt.HTML_SMARTYPANTS,
	}
}

func main() {
	// We're going to scan the blog
	var err error
	if posts, err = Scan(); err != nil {
		log.WithFields(log.Fields{
			"error": err,
		}).Panic("Error reading posts")
	}

	log.WithFields(log.Fields{
		"port": port,
	}).Info("Starting blog")

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
	var path string
	if path = r.URL.Path[1:]; path == "" {
		// Show the homepage
		homepage(w)
		return
	}

	// @TODO: Use YAML file for handling 301 redirects for old blog posts.
	//        This can currently be handled by using nginx/apache as a reverse
	//        proxy and having the web server redirect the client.
	if !posts.Exists(path) {
		notFound(w, r)
		return
	}

	// Set the human readable date and our parsed markdown. We're calling
	// exported struct methods here instead of mustache because, even though
	// mustache can access them server-side, these methods *aren't* visible
	// to Backbone/JS. We're using the same templates for the front and back
	// end, so this is a necessity.
	post := posts.List[path]
	fmt.Fprint(w, mustache.RenderFileInLayout("public/templates/posts/view.html", "public/templates/layout.html", post))
}

// Handles 404 errors.
func notFound(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(404)
	fmt.Fprint(w, mustache.RenderFileInLayout("public/templates/errors/404.html", "public/templates/layout.html"))
}

// Lists the blog homepage
func homepage(w http.ResponseWriter) {
	list := posts.order()
	fmt.Fprint(w, mustache.RenderFileInLayout("public/templates/posts/list.html", "public/templates/layout.html", map[string]interface{}{"posts": list}))
	return
}
