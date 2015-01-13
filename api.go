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

	json, err := json.Marshal(posts.order())
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
	slug := r.URL.Path[7:]
	json, _ := json.Marshal(posts.List[slug])

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
