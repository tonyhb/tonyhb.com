define ["modernizr", "backbone", "jquery", "router"], (Modernizr, Backbone, $, Router) ->

  app = 
    router: new Router
    init: ->
      if window.location.search.indexOf("debug=true") >= 0
        window.app = @ if ! window.app?

      # Cancel navigation links that begin with a forward slash (my domain) and use
      # Backbone.
      $(document).on "click", "a[href^='/']", (event) =>
        # Allow shift/command clicking etc. for new tabs. I hate it when this
        # doesn't happen.
        return if event.altKey or event.ctrlKey or event.metaKey or event.shiftKey
        # Navigate to the current link with Backbone
        @router.navigate event.target.getAttribute("href"), trigger: true
        event.preventDefault()
        return false

      # Start backbone
      Backbone.history.start pushState: true
      @init = -> @
      @

  app.init()
