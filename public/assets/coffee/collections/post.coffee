B = require('backbone')
Model = require('models/post')

module.exports = B.Collection.extend
  model: Model
  url: "/posts"
