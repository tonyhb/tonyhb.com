package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
)

// Lists all posts in JSON for backbone
func apiList(w http.ResponseWriter, r *http.Request) {
	if !acceptOk(r) {
		w.WriteHeader(406)
		return
	}

	// noindex http header for le search
	w.Header().Add("robots", "noindex")

	list := Posts.list()

	json, err := json.Marshal(list)
	if err != nil {
		fmt.Fprint(w, err.Error())
	}

	// Print out our list of posts in JSON
	fmt.Fprint(w, string(json))
}

func apiPost(w http.ResponseWriter, r *http.Request) {
	if !acceptOk(r) {
		w.WriteHeader(406)
		return
	}

	// noindex http header for le search
	w.Header().Add("robots", "noindex")

	// Find our post
	path := r.URL.Path[7:]
	list, _ := Posts.scan()
	post := list[path]
	post.Content = post.ParseContent()

	json, _ := json.Marshal(post)

	fmt.Fprint(w, string(json))
}

func acceptOk(r *http.Request) bool {
	// If this doesn't accept JSON, throw a not acceptable.
	ok := false
	for _, e := range r.Header["Accept"] {
		if strings.Index(e, "application/json") >= 0 {
			ok = true
			break
		}
	}
	return ok
}
