(function() {
  define(["backbone", "jquery", "collection/post"], function(Backbone, $, PostCollection) {
    var app;
    app = {
      posts: new PostCollection,
      initialize: function() {
        var _this = this;
        if (window.location.port === "8888" && (window.app == null)) {
          window.app = this;
        }
        $(document).on("click", "a[href^='/']", function(event) {
          var href, regex;
          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
            return;
          }
          regex = RegExp("http(s)?:\/\/" + window.location.host);
          href = event.target.getAttribute("href").replace(regex, "");
          _this.router.navigate(href, {
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
