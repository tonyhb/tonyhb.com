package main

import (
	"bytes"
	"io/ioutil"
	"regexp"
	"strings"
	"time"
)

// Given a filename and modification date create a fully parsed Post entry
func NewPost(filename string, date time.Time) (p *Post, err error) {
	p = &Post{
		Title: filename,
		Date:  date,
	}

	p.ParseSlug()
	err = p.ParseContent()
	return
}

type Post struct {
	Title        string // The filename is the title
	Slug         string
	Date         time.Time
	IsSummarized bool
	Content      string `json:"Content,omitempty"`
	Summary      string `json:"Summary,omitempty"`
}

func (p *Post) ParseSlug() (slug string) {
	// Slugs can only include numbers, letters, hyphens and spaces.
	// Capture and remove everything else
	reg := regexp.MustCompile("(?:[^\\d\\w- ])+")
	slug = reg.ReplaceAllString(p.Title, "")

	// Convert all spaces to dashes
	reg = regexp.MustCompile(" +")
	slug = reg.ReplaceAllString(slug, "-")

	slug = strings.ToLower(slug)

	p.Slug = slug
	return
}

// Parse the main blog content and the blog summary, if it exists.
// This only returns an error if parsing the main content fails
func (p *Post) ParseContent() error {
	var err error
	if p.Content, err = p.parseContent("posts/" + p.Title + ".md"); err != nil {
		return err
	}
	p.Summary, err = p.parseContent("posts/summaries/" + p.Title + ".md")
	p.IsSummarized = (err == nil)
	return nil
}

func (p Post) parseContent(filename string) (content string, err error) {
	// Read the contents of our blog post
	var data []byte

	// No need to capture err: the length check below implicitly does this
	data, err = ioutil.ReadFile(filename)

	// There's nothing in the file to return.
	if len(data) == 0 {
		return
	}

	buffer := bytes.NewBuffer([]byte{})
	markdown.WriteHTML(buffer, data)

	content = string(buffer.Bytes())
	return
}
