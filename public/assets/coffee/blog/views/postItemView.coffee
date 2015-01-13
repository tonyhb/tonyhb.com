M = require('marionette')
tpl = require('html!blog/html/postItemView.html')

module.exports = M.ItemView.extend
  template: tpl
  onShow: ->
    slug = @model.get('Slug')
    if DISQUS?
      DISQUS.reset({
        reload: true
        config: ->
          @page.url = "http://tonyhb.com/" + slug
      })
