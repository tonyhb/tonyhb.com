M = require('marionette')
Radio = require('radio')

# Views
PostCollectionView = require('blog/views/homePostCollectionView')
PostContentView = require('blog/views/postContentItemView')
PostSummaryView = require('blog/views/postSummaryItemView')

# Collections and Models
PostCollection = require('collections/post')

# Define our sub-app
blog = {
  collection: new PostCollection()

  Router: M.AppRouter.extend
    appRoutes:
      "": "showHome"
      ":post": "showPostContent"
      ":post/summary": "showPostSummary"

  Controller: M.Controller.extend
    # Cache the region from the Radio channel: it's always the same
    _region: null

    showHome: ->
      promise = blog.collection.fetch()
      promise.then ->
        @_region ?= Radio.channel('regions').request('content')
        @_region.show new PostCollectionView({
          collection: blog.collection
        })

    showPostContent: (url) ->
      @_region ?= Radio.channel('regions').request('content')
      # If the post exists in our collection already we can quit
      return if @_findAndShowPost(url, PostContentView, @_region)
      # Update our posts collection and then show the post
      promise = blog.collection.fetch()
      promise.then =>
        return if @_findAndShowPost(url, PostContentView, @_region)
        # @TODO Show an error page: this post doesn't exist

    showPostSummary: (url) ->
      @_region ?= Radio.channel('regions').request('content')
      # If the post exists in our collection already we can quit
      return if @_findAndShowPost(url, PostSummaryView, @_region)
      # Update our posts collection and then show the post
      promise = blog.collection.fetch()
      promise.then =>
        return if @_findAndShowPost(url, PostSummaryView, @_region)
        # @TODO Show an error page: this post doesn't exist

    # Find a post via a slog from blog.collection and show it
    _findAndShowPost: (slug, View, region) ->
      post = blog.collection.findWhere({Slug: slug})
      @_region.show new View({ model: post }) if post
      return post?
}

blog.controller = new blog.Controller()
blog.router = new blog.Router({controller: blog.controller})

Radio.channel('router').on 'showPostContent', (slug) ->
  debugger
  blog.controller.showPostContent(slug)
  blog.router.navigate slug

Radio.channel('router').on 'showPostSummary', (slug) ->
  debugger
  blog.controller.showPostSummary(slug)
  blog.router.navigate slug + "/summary"

Radio.channel('router').on 'showHome', ->
  blog.controller.showHome()
  blog.router.navigate "/"

module.exports = blog
