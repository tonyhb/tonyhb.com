(function() {
  define(["backbone"], function(Backbone) {
    var Post;
    return Post = Backbone.Model.extend({
      idAttribute: "Slug",
      url: function() {
        return "/posts/" + this.id;
      }
    });
  });

}).call(this);
