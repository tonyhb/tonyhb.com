define ["backbone", "app", "view/list", "view/post"], (Backbone, app, ListView, PostView) ->

  Router = Backbone.Router.extend(
    routes:
      "": "showHome"
      ":post": "showPost"

    showHome: ->
      # Render the list view using our posts.
      view = new ListView(collection: app.posts)
      $("#main").html(view.render())

    showPost: (href) ->
      # Find the post from our collection
      post = app.posts.findWhere "Slug": href
      return @notFound() unless post?

      post.fetch
       success: (model, response, options) ->
          view = new PostView(model: model)
          $("#main").html(view.render())

    notFound: ->
      $("#main").html("<h1>404 Not Found</h1>");
  )

