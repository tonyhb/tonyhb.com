package main

import (
	"time"
	"io/ioutil"
	"bytes"
	"github.com/madari/goskirt"
)

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

