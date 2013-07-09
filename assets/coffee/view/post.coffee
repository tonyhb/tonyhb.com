define ["backbone", "mustache", "text!templates/posts/view.html"], (Backbone, Mustache, template) ->
  PostView = Backbone.View.extend
    tagName: "div"
    render: ->
      Mustache.render(template, post: @model.toJSON())
