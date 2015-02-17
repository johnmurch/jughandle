# jughandle
Automatic Referral Tracking
[GitHub](https://github.com/johnmurch/jughandle)


Inspired by [@mattangriffel](https://medium.com/@mattangriffel/out-of-startup-ideas-here-have-a-few-49acac7c3405)

## Automatic referral tracking through URL
this one is kind of technical, but every page on a product should append a unique parameter (something like ?id=532391) that way when I copy the URL and send it to a friend, they know who referred who. And a link could be permanently created between users


#Goal
*Work In Progress - Only tracker (jughandle.js) works*

*V0.1 JS Tracker*

If you would like to download the code and try it for yourself:

1. Clone the repo: `git clone https://github.com/johnmurch/jughandle`
2. Add JS file `<scirpt src="./dist/jughandle.js"></script>`
3. Customize JS file `<script>
jughandle.param("jhid");
jughandle.config("jh_cookie");
jughandle.run();
</script>`
4. Create custom links to keep track of param with analytics or use a goal URL with that param. e.g. www.domain.com/thankyou?jhid=twitter

