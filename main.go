package main

import (
	"time"

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
	var err error
	log.SetLevel(log.DebugLevel)
	log.SetFormatter(&log.JSONFormatter{})

	// Open the YAML file and find out which
	config, err = yaml.ReadFile("config/go-blog.yaml")
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

	go refresh()
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
	http.HandleFunc("/assets/", assets)
	http.HandleFunc("/", serve)
	http.ListenAndServe(":"+port, nil)
}

// Refresh the post list every minute
// @TODO: Make this length configurable
func refresh() {
	c := time.Tick(1 * time.Minute)
	for _ = range c {
		if err := posts.Scan(); err != nil {
			log.WithFields(log.Fields{
				"error": err,
			}).Warn("Error refreshing posts list")
		}
	}
}

func assets(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./public"+r.URL.Path)
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

	if path[len(path)-8:] == "/summary" {
		path = path[0 : len(path)-8]
	}

	if refresh, _ := config.Get("refresh_on_hit"); refresh == "true" {
		posts.Scan()
	}

	// @TODO: Use YAML file for handling 301 redirects for old blog posts.
	//        This can currently be handled by using nginx/apache as a reverse
	//        proxy and having the web server redirect the client.
	if !posts.Exists(path) {
		notFound(w, r)
		return
	}

	post := posts.List[path]
	fmt.Fprint(w, mustache.RenderFileInLayout("public/templates/posts/view.html", "public/templates/layout.html", *post))
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
