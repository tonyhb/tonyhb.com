(function() {
  define(["backbone", "model/post"], function(Backbone, Post) {
    var PostCollection;
    return PostCollection = Backbone.Collection.extend({
      model: Post,
      url: "/posts"
    });
  });

}).call(this);
