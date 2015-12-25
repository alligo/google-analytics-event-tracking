# Google Analytics Event Tracking - Alligo Helper
This is just simple way to add Event Tracking to your analitcs by just adding a
few data atributes to the respective elements on the page, that work with
lastest Google Analitcs.

Follow [@fititnt](https://twitter.com/fititnt) on Twitter or
[@fititnt](https://github.com/fititnt) on Github for updates

## Examples
Include file gaet.js (i.g `<script src="gaet.js"></script>`) on your HTML file. Does not
need be at start of your document, so is best for your users add near `</body>` or
load in a asyncronous way, and you will get a better score on Google Search


### Click to links

@todo finish example

#### Tracking Social Interaction
This example show how to track share click on WhatsApp, Facebook and Twitter, without need
of load bloated JS from theirs APIs and Slow down your site. Its ideal if you do not
care about share count for Facebook (WhatsApp and Twitter do not have count)


```html
<ul class="list-inline">
<li>
    <!--
    For obvious reasons, share on WhatsApp only works on mobile that have WhatsApp installed
    WhatsApp Web will not work by limitation of WhatsApp at present date
    -->
    <a href="whatsapp://send?text=I%27m+using+Google+Analytics+Event+Tracking+from+Alligo+https%3A%2F%2Fgithub.com%2Falligo%2Fgoogle-analytics-event-tracking"
        title="Share on WhatsApp" target="_blank"
        data-ga-event="click"
        data-ga-category="GAET/Click/Share"
        data-ga-action="SharedOn/WhatsApp"
        data-ga-label="GAETexample"
        >
        <i class="fa fa-whatsapp" aria-hidden="true"></i> Share on WhatsApp
    </a>
</li>
<li>
    <a href="https://www.facebook.com/sharer/sharer.php?p%5Burl%5D=https%3A%2F%2Fgithub.com%2Falligo%2Fgoogle-analytics-event-tracking"
    title="Share on Facebook" target="_blank"
    data-ga-event="click"
    data-ga-category="GAET/Click/Share"
    data-ga-action="SharedOn/Facebook"
    data-ga-label="GAETexample"
    >
    <i class="fa fa-facebook" aria-hidden="true"></i> Share on Facebook
    </a>
</li>
<li>
    <a href="https://twitter.com/home?status=I%27m+using+Google+Analytics+Event+Tracking+from+Alligo+https%3A%2F%2Fgithub.com%2Falligo%2Fgoogle-analytics-event-tracking"
    title="Share on Twitter" target="_blank"
    data-ga-event="click"
    data-ga-category="GAET/Click/Share"
    data-ga-action="SharedOn/Twitter"
    data-ga-label="GAETexample"
    >
    <i class="fa fa-twitter" aria-hidden="true"></i> Share on Twitter
    </a>
</li>
</ul>
```
### Submit a form

@todo finish example

### Page visualization

@todo finish example

## Requirements
- *Requires Google analytics.js (ga). Old one (_gac) will NOT work*
- To test, is best use a localhost or remote http or https URL. Just open
the htmls from localhost (file://) will not work well for testing

# How to debug?
I would recomend you to install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)


## More information
See https://developers.google.com/analytics/devguides/collection/analyticsjs/events

# Configure for local testing
Just a example to prepare and run. You can ignore it if wanna just use

If code is in folder `/alligo/code/alligo/google-analytics-event-tracking` and
`/alligo/web/_/` is your localhost folder, on a Linux OS, can Symlink with

`ln -s /alligo/code/alligo/google-analytics-event-tracking /alligo/web/_/google-analytics-event-tracking`

Then open your browser. If is listening at port 82, your URL will be
http://localhost:82/google-analytics-event-tracking/