package main

import (
	"os"

	log "github.com/sirupsen/logrus"

	"io/ioutil"
)

// Posts is a map of normalized URL strings to post title strings and last
// modification timestamps for blog posts.
// eg:
//   "test-post" : { "title" : "Test Post", "date" : time.Time }
type PostList map[string]*Post

type Posts struct {
	List PostList
}

func Scan() (list Posts, err error) {
	list = Posts{}
	err = list.Scan()
	return
}

// Scans the posts directory for markdown files and updates the list of blog
// posts accordingly.
func (wp *Posts) Scan() (err error) {
	var dirContents []os.FileInfo
	log.Debug("Scanning ./posts")

	if dirContents, err = ioutil.ReadDir("./posts"); err != nil {
		log.WithFields(log.Fields{
			"error": err,
		}).Warn("Error reading from posts")
		return
	}

	wp.List = PostList{}
	for _, file := range dirContents {
		var post *Post
		nameLength := len(file.Name())
		// Skip hidden files
		if file.Name()[0] == '.' || file.Name()[nameLength-3:nameLength] != ".md" {
			continue
		}

		log.WithFields(log.Fields{
			"filename": file.Name(),
		}).Debug("Found blog post")

		if post, err = NewPost(file.Name()[:nameLength-3], file.ModTime()); err != nil {
			return
		}

		wp.List[post.Slug] = post
	}

	return
}

// Helper method to check if a blog post exists
func (this Posts) Exists(path string) (ok bool) {
	_, ok = this.List[path]
	return
}

// Returns a slice of blog posts listed in date order
func (this Posts) order() (list []*Post) {
	for _, post := range this.List {
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
			if post.Date.After(v.Date) {
				a := list[0:i]
				b := list[i:len(list)]

				start := make([]*Post, len(a))
				end := make([]*Post, len(b))
				copy(start, a)
				copy(end, b)

				list = append(start, post)

				// We can't just append(start, end) as end is a slice - we need to iterate
				// through all values in end and append to our list
				for _, v := range end {
					list = append(list, v)
				}
				break
			}

			// Only append if this is the oldest item in the list (ie. i is the last iteration)
			if i == (len(list) - 1) {
				list = append(list, post)
			}
		}
	}
	return
}
