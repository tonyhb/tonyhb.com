define ["backbone", "jquery", "collection/post"], (Backbone, $, PostCollection) ->

  app = 
    posts: new PostCollection
    initialize: ->
      window.app = @ if window.location.port == "8888" and ! window.app?

      # Cancel navigation links that begin with a forward slash (my domain) and use
      # Backbone.
      $(document).on "click", "a[href^='/']", (event) =>
        # Allow shift/command clicking etc. for new tabs. I hate it when this
        # doesn't happen.
        return if event.altKey or event.ctrlKey or event.metaKey or event.shiftKey

        # Remove the origin from the href (IE7 bug, and IE7 doesn't have
        # window.location.origin)
        regex = RegExp "http(s)?:\/\/" + window.location.host
        href  = event.target.getAttribute("href").replace regex, ""

        # Navigate to the current link with Backbone
        @router.navigate href, trigger: true
        event.preventDefault()
        return false

      # Start backbone
      Backbone.history.start pushState: true, silent: true

      # Download a list of posts
      @posts.fetch()

      # Overwrite the initialize function to return the app object
      @initialize = -> @
      @

  app
