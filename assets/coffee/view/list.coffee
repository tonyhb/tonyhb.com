define ["backbone", "mustache", "text!templates/posts/list.html"], (Backbone, Mustache, template) ->
  ListView = Backbone.View.extend
    tagName: "div"
    render: ->
      # Render the 
      Mustache.render(template, posts: @collection.toJSON())
