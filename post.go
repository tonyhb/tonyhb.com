package main

import (
	"bytes"
	"io/ioutil"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/madari/goskirt"
)

type Post struct {
	Title        string
	Slug         string
	Date         string
	IsSummarized bool
	Content      string `json:"Content,omitempty"`
	date         time.Time
}

func (this Post) ParseSlug() (slug string) {
	// Remove non-whitespace punctiation (except colon)
	reg, _ := regexp.Compile("[,.!?]+")
	slug = reg.ReplaceAllString(this.Title, "")

	// Make everything else a dash
	reg, _ = regexp.Compile("[^A-Za-z0-9]+")
	slug = reg.ReplaceAllString(slug, "-")

	slug = strings.ToLower(slug)
	return
}

func (this Post) ParseDate() string {
	suffix := "th"
	switch this.date.Day() {
	case 1, 21, 31:
		suffix = "st"
	case 2, 22:
		suffix = "nd"
	case 3, 23:
		suffix = "rd"
	}
	return strconv.Itoa(this.date.Day()) + suffix + " " + this.date.Month().String() + " " + strconv.Itoa(this.date.Year())
}

func (this Post) ParseContent() string {
	// Read the contents of our blog post
	var contents []byte
	contents, _ = ioutil.ReadFile("posts/" + this.Title + ".md")

	markdown := goskirt.Goskirt{
		goskirt.EXT_AUTOLINK | goskirt.EXT_STRIKETHROUGH,
		goskirt.HTML_SMARTYPANTS,
	}

	// There's nothing in this file to return.
	if len(contents) == 0 {
		return ""
	}

	buffer := bytes.NewBuffer([]byte{})
	markdown.WriteHTML(buffer, contents)
	return string(buffer.Bytes())
}
