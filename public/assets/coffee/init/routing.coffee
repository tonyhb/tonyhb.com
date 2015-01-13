Radio = require('radio')

# Provide a single router for navigation from our app. This lets us temporarily
# prevent navigation if necessary - say, when a user half-edits their profile.
#
# To navigate, use the following:
#   Radio.channel('router').command 'routeNameToSend'
#
# To prevent navigation, use the following:
#   Radio.channel('router').preventNavigation()
#
# You can also provide a custom modal/alert for preventing navigation by
# passing in a callback:
#   Radio.channel('router').preventNavigation (route) ->
#     return confirm "you sure, homie?"
#
# This will run the method passed to preventNavigation() and prevent
# callback if the answer === false

router = Radio.channel('router')

router.windowUnloadMessage = "Are you sure? Your current task is not complete."

# Prevent navivgation internally and via closing a tab.
#
# Uses:
#
#   Radio.channel('router').preventNavigation("Are you sure?")
#
#   Radio.channel('router').preventNavigation ->
#     confirm("Are you sure you want to navigate via an internal link?")
#
# @param string    Message to show when closing the tab
# @param function  Called when navigating internally. Return true to enable 
#                  navigation, false to prevent
router.preventNavigation = (callback) ->
  @enabled = callback || false
  # Ensure we show a pop-up if the user tries to close the tab/window
  window.onbeforeunload = (e) ->
    return router.windowUnloadMessage

# Re-enable navigation
router.enableNavigation = ->
  @enabled = true
  window.onbeforeunload = -> undefined

# Listen to all radio commands for navigation
router.comply 'navigate', (routeName) ->
  enabled = if _.isFunction(@enabled) then @enabled(route) else @enabled
  return if enabled is false
  # Before navigating trigger an event which other libraries can hook into. This
  # is useful for external library quirks such as Bugsnag, which only transmits
  # 10 errors per page refresh and hence needs to be reset on navigation.
  router.trigger('navigating')
  # Finally, trigger the route event which controllers should listen to.
  router.trigger.apply @, arguments
