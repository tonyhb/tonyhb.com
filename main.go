package main

import (
	"bytes"
	"fmt"
	"github.com/madari/goskirt"
	"io/ioutil"
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

// Posts is a map of normalized URL strings to post title strings and last
// modification timestamps for blog posts.
// eg:
//   "test-post" : { "title" : "Test Post", "date" : time.Time }
type postList map[string]map[string]interface{}

// Scans the posts directory for markdown files and updates the list of blog
// posts accordingly.
func (this postList) scan() (list postList, err error) {
	list = postList{}

	dirContents, err := ioutil.ReadDir("./posts")
	if err != nil {
		return
	}

	for _, file := range dirContents {
		// Skip hidden files
		if file.Name()[0] == '.' {
			continue
		}

		filename := file.Name()[:len(file.Name())-3]
		path := slug(filename)

		details := make(map[string]interface{})
		details["title"] = filename // Use the filename without .md - this allows us to write clean lists for the homepage
		details["date"] = file.ModTime()
		list[path] = details
	}

	return
}


// Helper method to check if a blog post exists
func (this postList) exists(path string) (ok bool) {
	_, ok = Posts[path]
	return
}

// Reads a markdown file and returns HTML given a URL path
func (this postList) read(path string) (html []byte, err error) {
	// Read the contents of our blog post
	var contents []byte
	contents, err = ioutil.ReadFile("posts/" + Posts[path]["title"].(string) + ".md")

	markdown := goskirt.Goskirt{
		goskirt.EXT_AUTOLINK | goskirt.EXT_STRIKETHROUGH,
		goskirt.HTML_SMARTYPANTS,
	}

	buffer := bytes.NewBuffer([]byte{})
	markdown.WriteHTML(buffer, contents)
	return buffer.Bytes(), nil
}

// Returns a slice of blog posts listed in date order
func (this postList) list() (list []map[string]interface{}) {
	for _, post := range Posts {
		// Create a map for the post title and date
		listItem := make(map[string]interface{})
		listItem["title"] = post["title"]
		listItem["date"] = post["date"]

		// We can add the first file without worrying about order
		if len(list) == 0 {
			list = append(list, listItem)
			continue
		}

		// We need to loop through the current list and add the item
		// at the correct place, according to it's timestamp
		for i, v := range list {
			if post["date"].(time.Time).After(v["date"].(time.Time)) {
				a := list[0:i]
				b := list[i:len(list)]

				start := make([]map[string]interface{}, len(a))
				end := make([]map[string]interface{}, len(b))
				copy(start, a)
				copy(end, b)

				list = append(start, listItem)
				// We can't just append(start, end)
				for _, v := range end {
					list = append(list, v)
				}
				break
			}

			// This is the oldest blog post so far: add it to the end
			if i == (len(list) - 1) {
				list = append(list, listItem)
			}
		}
	}
	return
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

