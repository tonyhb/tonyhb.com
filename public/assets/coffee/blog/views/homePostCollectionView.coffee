M = require('marionette')
ItemView = require('blog/views/homePostItemView')

module.exports = M.CollectionView.extend
  childView: ItemView
