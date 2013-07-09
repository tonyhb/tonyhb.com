requirejs.config
  deps: ["main"]
  paths:
    modernizr: "libs/modernizr"
    jquery: "libs/jquery-1.10.1"
    backbone: "libs/backbone"
    underscore: "libs/underscore"
  shim:
    backbone:
      deps: ["underscore", "jquery"]
      exports: "Backbone"
    underscore:
      exports: "_"
