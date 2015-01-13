PostContentView = require('blog/views/postContentItemView')

module.exports = PostContentView.extend
  alternativeMode: 'showPostContent'
  templateHelpers: ->
    return {
      Content: @model.get('Summary'),
      toggleModeText: "Show the full content"
    }
