define ["backbone"], (Backbone) ->

  Router = Backbone.Router.extend(
    routes:
      "": "showHome"
      ":post": "showPost"

    showHome: ->
      console.log "Homepage"

    showPost: (post) ->
      console.log "Blog post: " + post
  )

