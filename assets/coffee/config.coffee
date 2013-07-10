requirejs.config
  deps: ["init"]
  paths:
    # Templates are separated
    templates: "/public/templates"
    # Libraries are all in the libs folder
    jquery: "libs/jquery-1.10.1"
    backbone: "libs/backbone"
    underscore: "libs/underscore"
    mustache: "libs/mustache"
    text: "libs/require-text"
  shim:
    backbone:
      deps: ["underscore", "jquery"]
      exports: "Backbone"
    underscore:
      exports: "_"
