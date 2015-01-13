module.exports = {
  entry: {
    app: "./public/assets/coffee/app.coffee",
    vendor: [
      "jquery",
      "underscore",
      "backbone",
      "marionette",
      "radio",
      "mustache",
    ],
    rainbow: [
      "rainbow",
      "rainbow_generic",
      "rainbow_go",
      "rainbow_javascript",
      "rainbow_php",
      "rainbow_shell",
    ]
  },
  output: {
    filename: "./public/assets/js/[name].js",
    sourceMapFilename: "./public/assets/js/[name].map",
    publicPath: "/assets/js/"
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" }
    ]
  },
  resolve: {
    root: __dirname + "/public/assets/coffee",
    extensions: ["", ".webpack.js", ".web.js", ".js", '.coffee'],
    moduleDirectories: [
      "coffee",
      "js",
      "libs"
    ],
    alias: {
      marionette:         __dirname + "/public/assets/libs/backbone.marionette.js",
      backbone:           __dirname + "/public/assets/libs/backbone.js",
      underscore:         __dirname + "/public/assets/libs/lodash.underscore.js",
      jquery:             __dirname + "/public/assets/libs/jquery-2.1.3.js",
      "$serialize":       __dirname + "/public/assets/libs/jquery.serialize-object.js",
      radio:              __dirname + "/public/assets/libs/backbone.radio.js",
      mustache:           __dirname + "/public/assets/libs/mustache.js",
      rainbow:            __dirname + "/public/assets/libs/rainbow.js",
      rainbow_generic:    __dirname + "/public/assets/libs/rainbow.generic.js",
      rainbow_go:         __dirname + "/public/assets/libs/rainbow.go.js",
      rainbow_javascript: __dirname + "/public/assets/libs/rainbow.javascript.js",
      rainbow_php:        __dirname + "/public/assets/libs/rainbow.php.js",
      rainbow_shell:      __dirname + "/public/assets/libs/rainbow.shell.js",
      rainbow_ruby:       __dirname + "/public/assets/libs/rainbow.ruby.js",
    }
  }
};
