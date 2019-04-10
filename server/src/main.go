package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
  	fmt.Fprintf(w, "This is a website server by a Go HTTP server.")
 })

	http.ListenAndServe(":8081", nil)
}