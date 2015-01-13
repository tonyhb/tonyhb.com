M = require('marionette')
Radio = require('radio')
Rainbow = require('exports?Rainbow!rainbow')
tpl = require('html!blog/html/postItemView.html')
disqusTpl = require('html!blog/html/disqus.html')

module.exports = M.ItemView.extend
  template: tpl
  mode: 'full'
  ui:
    toggleMode: '.toggleMode'
  events:
    'click @ui.toggleMode': 'toggleMode'

  # The name of the router command we need to fire to toggle the other mode
  alternativeMode: 'showPostSummary'

  toggleMode: ->
    Radio.channel('router').command 'navigate', @alternativeMode, @model.get('Slug')

  onShow: ->
    @ui.toggleMode.removeClass('hidden') if @model.get('IsSummarized') is true
    @restartDisqus()
    Rainbow.color()

  restartDisqus: ->
    slug = @model.get('Slug')
    if DISQUS?
      DISQUS.reset({
        reload: true
        config: ->
          @page.url = "http://tonyhb.com/" + slug
      })
    else
      @$el.append(disqusTpl)

  templateHelpers: ->
    return {
      toggleModeText: "Show the summary"
    }
