(function() {
  require(["app", "router"], function(app, Router) {
    app.router = new Router;
    return app.initialize();
  });

}).call(this);
