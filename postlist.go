package main

import (
	"bytes"
	"github.com/madari/goskirt"
	"io/ioutil"
)

// Posts is a map of normalized URL strings to post title strings and last
// modification timestamps for blog posts.
// eg:
//   "test-post" : { "title" : "Test Post", "date" : time.Time }
type postList map[string]Post

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

		post := Post{
			title: file.Name()[:len(file.Name())-3],
			date:  file.ModTime(),
		}

		list[post.Slug()] = post
	}

	return
}

// Helper method to check if a blog post exists
func (this postList) exists(path string) (ok bool) {
	_, ok = Posts[path]
	return
}

// Returns a slice of blog posts listed in date order
func (this postList) list() (list []Post) {
	for _, post := range Posts {
		// We can add the first file without worrying about order
		if len(list) == 0 {
			list = append(list, post)
			continue
		}

		// We need to loop through the current list and add the item
		// at the correct place, according to it's timestamp
		for i, v := range list {
			// This is newer than the current item in the list. Split the list 
			// at this index (i), insert the post into the list and rebuild.
			if post.date.After(v.date) {
				a := list[0:i]
				b := list[i:len(list)]

				start := make([]Post, len(a))
				end := make([]Post, len(b))
				copy(start, a)
				copy(end, b)

				list = append(start, post)
				// We can't just append(start, end)
				for _, v := range end {
					list = append(list, v)
				}
				break
			}

			// This is the oldest blog post so far: add it to the end
			if i == (len(list) - 1) {
				list = append(list, post)
			}
		}
	}
	return
}

// Reads a markdown file and returns HTML given a URL path
func (this postList) read(path string) (html []byte, err error) {
	// Read the contents of our blog post
	var contents []byte
	contents, err = ioutil.ReadFile("posts/" + Posts[path].title + ".md")

	markdown := goskirt.Goskirt{
		goskirt.EXT_AUTOLINK | goskirt.EXT_STRIKETHROUGH,
		goskirt.HTML_SMARTYPANTS,
	}

	buffer := bytes.NewBuffer([]byte{})
	markdown.WriteHTML(buffer, contents)
	return buffer.Bytes(), nil
}
