# Google Analytics Event Tracking - Alligo Helper - v0.5beta
This is just simple way to add Event Tracking to your analitcs by just adding a
few data atributes to the respective elements on the page, that work with
lastest Google Analitcs.

This small library help to deal with a few edge cases. If you just add one
onClick handler for links and form submit, your request will just not work.
Why? Its simple: your page will redirect before request is made to GA
servers.

**GAET Alligo Helper** will be a bit more smart and in cases like this, will
- Stop link clicks and form submit
- Wait until Google Analytics servers respond "Ok, I tracked your event"
- If Google Analytics servers fails, or are too slow, force event (click,
form submit) to happen. So, will **not break your site** if GA is offline

Follow [@fititnt](https://twitter.com/fititnt) on Twitter or
[@fititnt](https://github.com/fititnt) on Github for updates

<img src="https://raw.githubusercontent.com/alligo/google-analytics-event-tracking/master/examples/social-media-events.png" alt="How Google Analytics will show results"/>

## Examples
Include file gaet.js (i.g `<script src="gaet.js"></script>`) on your HTML file. Does not
need be at start of your document, so is best for your users add near `</body>` or
load in a asyncronous way, and you will get a better score on Google Search

For a full example, look at folder examples/ on this repository

### Click to links

```html
<a href="http://www.fititnt.org/?utm_source=gaet&utm_medium=github&utm_campaign=gaet" target="_blank"
  data-ga-category="GAET/Click/SimpleLink"
  data-ga-action="LinkClick/ExternalUrl"
  data-ga-label="fititnt.org"
  data-ga-value="500"
>Visit fititnt.org website</a>
```

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
- **Requires Google analytics.js (ga). Old one (_gac) will NOT work**
- (**Only for debug**) install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
- (**Only for testing**) It is best use a localhost or remote http or https URL. Just open
the htmls from localhost (file://) will not work well for testing

## More information
See https://developers.google.com/analytics/devguides/collection/analyticsjs/events

# Configure for local testing
Just a example to prepare and run. You can ignore it if wanna just use

If code is in folder `/alligo/code/alligo/google-analytics-event-tracking` and
`/alligo/web/_/` is your localhost folder, on a Linux OS, can Symlink with

`ln -s /alligo/code/alligo/google-analytics-event-tracking /alligo/web/_/google-analytics-event-tracking`

Then open your browser. If is listening at port 82, your URL will be
http://localhost:82/google-analytics-event-tracking/

<!--
<img src=http://www.google-analytics.com/__utm.gif?utmac=UA-37321963-4&utmp=/readme.md&utmcc=__utma%3Dxpto
/>
-->