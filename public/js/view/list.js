(function() {
  define(["backbone", "mustache", "text!templates/posts/list.html"], function(Backbone, Mustache, template) {
    var ListView;
    return ListView = Backbone.View.extend({
      tagName: "div",
      render: function() {
        return Mustache.render(template, {
          posts: this.collection.toJSON()
        });
      }
    });
  });

}).call(this);
