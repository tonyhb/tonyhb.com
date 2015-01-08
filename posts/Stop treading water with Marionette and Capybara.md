While building [Incoin, our payroll distribution app](https://www.incoin.io)
(which allows you to get paid in bitcoin) I've learnt a few good lessons on
getting Capybara to play nice with Marionette — and hopefully your single page
app of choice.

At the start Capybara doesn't play very well with single page apps. It's a 
nightmare full of race conditions and quirky errors. Let's fix it:

## Waiting for ajax
<p style='text-align:center;font-size:.85em;margin-top:0'>in ruby (a.k.a welcome to hell, buddy)</p>

**Doing it badly**

First thing you're going to need to do is wait for ajax requests to complete.
A couple years ago [Artsy wrote this really cool blog
post](http://artsy.github.io/blog/2012/02/03/reliably-testing-asynchronous-ui-w-slash-rspec-and-capybara/)
with a couple ideas about how to do it. 

This is it, in essence:

	  class Capybara::Session
		def wait_until(timeout = Capybara.default_wait_time)
		  Timeout.timeout(timeout) do
			sleep(0.05) until value = yield
			value
		  end
		end
	  end

	  def wait_for_ajax(timeout = Capybara.default_wait_time)
		page.wait_until(timeout) do
	      # Luckily, $.active counts the # of ajax requests. Wait for it to get to 0
		  page.evaluate_script '(typeof jQuery === "undefined") || (jQuery && jQuery.active == 0)'
		end
	  end

Holy shit do *not* do this. It's a great start, but you'll hate yourself for it later. Here's why:

1. Minor: you're going to have to spam `wait_for_ajax` everywhere. No biggie, but damn it's tedious
2. Major: at some point you're going to have an ajax request that, when it's complete, triggers *another* ajax request. That means the counter will go `0-1-0-1-0`. `wait_for_ajax` only blocks until the first one's done. Fucking fantastic. Great work capybara...


---

**Doing it better**

Here's how you get an improvement over the easy fix:

1. Add rack middleware to count the number of active requests server side
2. Record the time when the # of active requests reaches 0
3. Wait for 200ms after the number of requests reaches 0 so your ajax trains don't crash

And here's an implementation:

    # lib/rack_request_counter.rb
    #
    # Source, which use jruby and atomic:
    # http://blog.salsify.com/engineering/tearing-capybara-ajax-tests
    # https://gist.githubusercontent.com/jturkel/9317269/raw/rack_request_blocker.rb
    class RackRequestCounter
    
      @@num_active_requests = 0
      @@nil_requests_at = Time.now
    
      def self.reset
    	@@nil_requests_at = Time.now
    	@@num_active_requests = 0
      end
    
      # Returns the number of requests the server is currently processing.
      def self.num_active_requests
    	@@num_active_requests
      end
    
      def self.nil_requests_at
    	@@nil_requests_at
      end
    
      # 503 status.
      def initialize(app)
    	@app = app
      end
    
      def call(env)
    	puts "Hit: #{env["PATH_INFO"]}" if ENV["SHOW_URLS"]
    	increment_active_requests
    	@app.call(env)
      ensure
    	decrement_active_requests
      end
    
      private
    
      def increment_active_requests
    	@@num_active_requests += 1
      end
    
      def decrement_active_requests
    	@@num_active_requests -= 1
    
    	# Mark this as the last time there were zero requests
    	@@nil_requests_at = Time.now if @@num_active_requests == 0
      end
    
    end
    
    # spec/support/click.rb
    module Capybara
      module Node
    	class Element < Base
    
    	  # Override the default implementation of click so that whenever we click
    	  # on something, we also wait for any ajax requests to finish.
    	  def click
    		synchronize { base.click }
    		wait_for_ajax
    	  end
    
    	end
      end
    end
    
    # spec/support/wait_for.rb
    #
    # Coupled with a Ruby-side request counter: see /lib/rack_request.counter.rb
    
    class Capybara::Session
      def wait_until(timeout = Capybara.default_wait_time)
    	Timeout.timeout(timeout) do
    	  sleep(0.05) until value = yield
    	  value
    	end
      end
    end
    
    # If this is called in a scenario from rspec page will be defined. However,
    # we've also overridden Capybara's default 'click' behaviour to also call
    # wait_for_ajax; this means we need to load the current session from Capybara.
    def wait_for_ajax(timeout = Capybara.default_wait_time)
      page ||= Capybara.current_session
    
      # After clicking, wait 50ms for an ajax request to fire off
      sleep(0.05)
      page.wait_until(timeout) do
    	# If there are no active requests and the last request was over 150ms ago,
    	# continue. This means that one AJAX request wasn't depending on another to
    	# finish... race condition central.com
    	RackRequestCounter.num_active_requests <= 0 && Time.now - RackRequestCounter.nil_requests_at > 0.15
      end
    end

[Check the gist by clicking on this handy underlined text](https://gist.github.com/tonyhb/dfd8da6522b93a45e377)

What the?

We've added a basic rack middleware which we add in test only via:

	config.middleware.insert_after ActionDispatch::RequestId, RackRequestCounter

Add this to application/config/test.rb. It's really important to put this 
before the `ActionDispatch::ShowExceptions` and 
`ActionDispatch::DebugExceptions` middlewares, otherwise your app could hang and
you might lose a few hours. It's annoying.

Unfortunately the request counters are a bit too quick for capybara to fire
ajax requests off, so that's why we added `sleep(0.05)` before
`page.wait_until`. 

Pretty alright, eh? Every time you tell capybara to go clicking around your app
it'll hold up for all ajax requests to finish and everything will be dandy. No
more pulling your hair out.

Also... **bonus round**! If you chuck `SHOW_URLS=1` before rspec a la
`SHOW_URLS=1 rspec spec/features` ruby will happily chuck out all of the URLs
you request as it's running your tests. No more writing tests in a black box!
This is a lifesaver, and can definitely speed up your test writing and
debugging.

## Minify your project

Use webpack, browserify, requirejs... whatever you like. Just make sure that you
compile your damn JS and templates before you run the test. This'll make
rendering much faster, and you won't get crazy timeouts from a needy phantomjs
saying that your HTML won't load.

## Conclusion

Capybara is awesome. Integrating Rails + Backbone for one comprehensive app test
is amazing and it makes you get butterflies as 600 green tests roll past first
time without any restarts. You can also get rid of [that damn
rspec-rerun](https://github.com/dblock/rspec-rerun) gem that you don't need.

Still, knowing this, capybara isn't comprehensive. Test your JS, too.
