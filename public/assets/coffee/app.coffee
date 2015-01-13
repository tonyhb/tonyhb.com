# Library includes
$ = require('jquery')
B   = require('backbone')
Marionette = require('marionette')
Radio      = require('radio')

# Init includes
require('init/marionette')
require('init/routing')
require('init/rainbow')

# App includes
require('blog/app')

app = new Marionette.Application()

# Regions
app.addRegions({
  content: "#main"
})


# Snippet: Allow any module to request app regions via a channel
#
# This allows any content module to render into application-level regions via:
#
#     Radio.channel('regions').request('content').show new View()
#
# 'default' is the callback executed for any .request call on this channel; it
# will pass back the app region if it exists or `undefined`
Radio.channel('regions').reply 'default', (region) ->
  app.getRegion(region)


# Snippet: Prevent links from reloading pages by default, single-page-app style
#
# Listen to all clicks on 'a' tags in the document, and only allow the browser
# to load the page if the link has a class of 'follow'.
app.on 'start', ->
  $(document).on 'click', 'a', (evt) ->
    evt.preventDefault() unless $(@).hasClass 'follow'


# Snippet: Start the Backbone router and load the app
#
# Start the initial app loudly: this will execute any backbone router's actions
# if it matches the current URL
app.on 'start', ->
  B.history.start({pushState: true, root: "/", silent: false})

  $("#home").on 'click', ->
    Radio.channel('router').command 'navigate', 'showHome'


# Start our application
app.start()
