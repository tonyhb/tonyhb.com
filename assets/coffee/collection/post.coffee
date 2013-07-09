define ["backbone", "model/post"], (Backbone, Post) ->
  PostCollection = Backbone.Collection.extend
    model: Post
    url: "/posts"
