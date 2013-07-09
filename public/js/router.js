(function() {
  define(["backbone"], function(Backbone) {
    var Router;
    return Router = Backbone.Router.extend({
      routes: {
        "": "showHome",
        ":post": "showPost"
      },
      showHome: function() {
        return console.log("Homepage");
      },
      showPost: function(post) {
        return console.log("Blog post: " + post);
      }
    });
  });

}).call(this);
