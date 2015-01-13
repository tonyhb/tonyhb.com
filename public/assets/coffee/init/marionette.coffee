M = require('marionette')
Radio = require('radio')
Mustache = require('mustache')

# Disable marionette's standard template cache: by default it looks for a HTML
# element with an ID provided.
# We use Webpack to pass HTML directly to the renderer.
M.TemplateCache::loadTemplate = (tplID) -> tplID

M.Renderer.render = (template, data) ->
  Mustache.render(template, data)

# Add Radio events to all Marionette views
#
# This allows you to specify a 'radioEvents' option, which will automatically
# listen to all events in the global event bus.
#
# Uses:
#
#   view = Marionette.View.extend({
#     radioEvents:
#       channelName:
#         eventName: 'callback'
#     callback: ->
#       alert "called via Radio.channel('channelName').trigger('eventName')"
#   })
#
defaultDelegateEvents = M.View.prototype.delegateEvents
defaultUndelegateEvents = M.View.prototype.undelegateEvents

# Add functionality to delegateEVents and undelegeateEvents to automatically
# bind to all specified radio channel events
_.extend M.View.prototype,
  delegateEvents: (events) ->
    defaultDelegateEvents.apply @, arguments
    channelEvents = M.getOption(@, 'radioEvents')
    for channel, events of channelEvents
      M.bindEntityEvents @, Radio.channel(channel), events

  undelegateEvents: ->
    defaultUndelegateEvents.apply @, arguments
    channelEvents = M.getOption(@, 'radioEvents')
    for name, channel of Radio._channels
      M.unbindEntityEvents @, channel, M.getOption(channelEvents, name)
