M = require('marionette')
Radio = require('radio')
tpl = require('html!blog/html/homePostItemView.html')

module.exports = M.ItemView.extend
  template: tpl
  events:
    "click h1": "navigate"
  navigate: ->
    Radio.channel('router').command 'navigate', 'showPostContent', @model.get('Slug')
