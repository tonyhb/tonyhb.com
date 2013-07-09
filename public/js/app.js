(function() {
  define(["modernizr", "backbone", "jquery", "router"], function(Modernizr, Backbone, $, Router) {
    var app;
    app = {
      router: new Router,
      init: function() {
        var _this = this;
        if (window.location.search.indexOf("debug=true") >= 0) {
          if (window.app == null) {
            window.app = this;
          }
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
          pushState: true
        });
        this.init = function() {
          return this;
        };
        return this;
      }
    };
    return app.init();
  });

}).call(this);
