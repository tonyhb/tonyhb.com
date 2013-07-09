define ["backbone"], (Backbone) ->
  # Backbone models are a bit overkill for my blog - there's no admin panel for
  # creating them, and we could just do a jquery request for some content and
  # drop it into the template. I like them, though.
  Post = Backbone.Model.extend
    idAttribute: "Slug"
    url: -> "/posts/" + @id
