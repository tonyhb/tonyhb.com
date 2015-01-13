For work we constantly reading blog posts and information from around the net. It's part of furthering our knowledge and personally, as a developer, it's a hefty part of my professional time. 

There are some great articles out there that really break down knowledge and help you understand *how and why* things work. They're fantastic — knowledge sharing is one of my favourite things about the internet (though incognito chrome might beg to differ).

The frustrating part is when I'm in "get shit done" mode. I'm cracking along and — bam — there's a problem which I want to solve then and there. Understanding *why* it's an issue is important but I don't want to spend 30 minutes decomposing it into it's primordial points.

Wouldn't it be great to take that same article and have a TLDR mode? To take an in depth article, have the key points and reasoning in a short summary, and have any examples/code snippets/graphics sitting alongside?

I feel like I'd be so much more productive at learning. And it'd be a great primer for when you’re in learning mode later on.

---

That said, I'm starting a new blogging engine from my Go blog introducing "tldr mode". You can highlight key points from what you’re writing and have them automatically translated into your tldr version. Go ahead, try it now. There's a summary link at the top.

Eventually I’d love to have something automated to do this for your blog posts. There’s a couple of things out there on Reddit that do something similar (namely the *bitofnewsbot*, using Python’s *PyTeaser* library, or textteaser.com) so in theory it shouldn’t be so hard.

And what if we made it a service like Medium.com? It would be pretty good to have this automatically done for you building from other people’s posts.

Maybe that’s where a couple of my evenings should be spent (amongst my full time gigs @ [keepupdated.co](https://keepupdated.co) and [incoin.io](https://www.incoin.io)).

Using this Go blog we could incorporate [Bolt](https://github.com/boltdb/bolt) (as well as file-based markdown posts) so you can deploy with docker with one line. Second, we could set up a service for people to sign up and write their blog posts without self-hosting. Third, see if we can’t automate the summarizing after a well-built corpus. Fourth, see if we can’t make a nice API to masticate other website’s content into something easily digestible.

Privacy note: I’m thinking about having the open source Go blog ping article content (full vs tldr) to a service to help build the corpus. Anonymously and fully customisable; you can turn off at your whim. The writing would be cached just like search engines do now (even you, DDG). 

Thoughts?

---

Footnote: after reading back the TLDR and the whole post I’m certain this isn’t the best example. The TLDR is exactly what I want to say without rambling. I know… Good communication is short communication. I’m imagining it something like this well-explained article: http://www.alexedwards.net/blog/a-recap-of-request-handling
