package main

import (
	"github.com/madari/goskirt"
	"strconv"
	"strings"
	"io/ioutil"
	"time"
	"bytes"
)

type Post struct {
	Title string
	date  time.Time
}

func (this Post) Slug() (slug string) {
	slug = strings.Replace(this.Title, ":", "-", -1)
	slug = strings.Replace(slug, ",", "", -1)
	slug = strings.Replace(slug, ".", "", -1)
	slug = strings.Replace(slug, " ", "-", -1)
	slug = strings.Replace(slug, "!", "", -1)
	slug = strings.Replace(slug, "?", "", -1)
	slug = strings.ToLower(slug)
	return
}

func (this Post) Date() string {
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

func (this Post) Content() string {
	// Read the contents of our blog post
	var contents []byte
	contents, _ = ioutil.ReadFile("posts/" + this.Title + ".md")

	markdown := goskirt.Goskirt{
		goskirt.EXT_AUTOLINK | goskirt.EXT_STRIKETHROUGH,
		goskirt.HTML_SMARTYPANTS,
	}

	buffer := bytes.NewBuffer([]byte{})
	markdown.WriteHTML(buffer, contents)
	return string(buffer.Bytes())
}
