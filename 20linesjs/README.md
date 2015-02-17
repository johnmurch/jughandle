# jughandle
Original Source Code, view Automatic Referral Tracking
[GitHub](https://github.com/johnmurch/jughandle)

## #20Line JS Hack

After being inspired by [@mattangriffel](https://medium.com/@mattangriffel/out-of-startup-ideas-here-have-a-few-49acac7c3405) to build Jughandle a way to automatically track referrals through a  URL, I realized I could kill 2 birds with one stone and compete in the #20line of code. With a few slight name changes and compression, I got it down to 20 lines with 80 characters long. 

## What does it do? 
This hack takes a URL param and keeps it as the visitor moves from page to page. Basically you set a URL param (configurable) that stores the data as both a cookie and localstorage, so if the user deletes the cookie (or the localstorage) it still sets the value. A website owner could use this script to put on their site and track specific inbound traffic. For example, you could wrap the URL in a URL shortner and track resume views for a specific job.  e.g. www.johnmurch.com?jhid=acme - so you know when the person from Acme Corp has visited your site and what pages. 

Another example is friend-referral traffic. Say you are hosting an event and have a few friends who want to drive traffic to the event, but keep track of who sends what. You could give each of them a unique ID and then their visitors who visit the site and end up copying/pasting the URL, it sticks with them so you can see who has the most viral network and/or reach of people. As it's not always referrals, but with this ID appended, it makes it easy to copy/paste the tracking. 
