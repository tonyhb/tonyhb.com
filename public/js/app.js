(function() {
  define(["modernizr", "backbone", "jquery", "collection/post"], function(Modernizr, Backbone, $, PostCollection) {
    var app;
    app = {
      posts: new PostCollection,
      initialize: function() {
        var _this = this;
        if (window.location.port === "8888" && (window.app == null)) {
          window.app = this;
        }
        $(document).on("click", "a[href^='/']", function(event) {
          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
            return;
          }
          _this.router.navigate(event.target.getAttribute("href"), {
            trigger: true
          });
          event.preventDefault();
          return false;
        });
        Backbone.history.start({
          pushState: true,
          silent: true
        });
        this.posts.fetch();
        this.initialize = function() {
          return this;
        };
        return this;
      }
    };
    return app;
  });

}).call(this);
