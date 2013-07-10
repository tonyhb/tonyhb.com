(function() {
  requirejs.config({
    deps: ["init"],
    paths: {
      templates: "/public/templates",
      jquery: "libs/jquery-1.10.1",
      backbone: "libs/backbone",
      underscore: "libs/underscore",
      mustache: "libs/mustache",
      text: "libs/require-text"
    },
    shim: {
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      },
      underscore: {
        exports: "_"
      }
    }
  });

}).call(this);
