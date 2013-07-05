package main

import (
	"time"
	"strings"
)

type Post struct {
	title string
	date  time.Time
}

func (this Post) Slug() (slug string) {
	slug = strings.Replace(this.title, " ", "-", -1)
	slug = strings.ToLower(slug)
	return
}
