(function() {
  require(["modernizr", "backbone", "jquery", "router"], function(Modernizr, Backbone, $, Router) {
    var DEBUG, app;
    app = {
      router: new Router
    };
    DEBUG = false;
    if (window.location.search.indexOf("debug=true") >= 0) {
      DEBUG = true;
      if (window.app == null) {
        window.app = app;
      }
    }
    $(document).on("click", "a[href^='/']", function(event) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }
      if (DEBUG) {
        console.log("Clicking on link", event.target);
      }
      app.router.navigate(event.target.getAttribute("href"), {
        trigger: true
      });
      event.preventDefault();
      return false;
    });
    return Backbone.history.start({
      pushState: true
    });
  });

}).call(this);
