require ["app", "router", "rainbow"], (app, Router, Rainbow) ->

  Rainbow.color()

  # We can't add the router in initialzie because the router depends on theapp
  # object. This solves our circular dependency, but I don't like it.
  # @TODO: Refactor and make cleaner once the rest is done
  app.router = new Router
  app.initialize()
