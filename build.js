({
  baseUrl: "public/js",
  include: ["rainbow_go", "rainbow_js", "rainbow_php", "rainbow_generic", "rainbow_coffee"],
  name: "init",
  mainConfigFile: "public/js/config.js",
  paths: {
    templates: "../templates",
    modernizr: "libs/modernizr",
    jquery: "libs/jquery-1.10.1",
    backbone: "libs/backbone",
    underscore: "libs/underscore",
    mustache: "libs/mustache",
    text: "libs/require-text",
    rainbow: "libs/rainbow",
    rainbow_go: "libs/rainbow.go",
    rainbow_js: "libs/rainbow.javascript",
    rainbow_php: "libs/rainbow.php",
    rainbow_coffee: "libs/rainbow.coffee",
    rainbow_generic: "libs/rainbow.generic"
  },
  out: "public/js/app-built.js"
})
