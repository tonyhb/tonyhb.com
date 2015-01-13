B = require('backbone')

module.exports = B.Model.extend
  idAttribute: "Slug"
  urlRoot: "/posts/"
