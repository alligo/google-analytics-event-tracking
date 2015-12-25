# Google Analytics Event Tracking - Alligo Helper
This is just simple way to add Event Tracking to your analitcs by just adding a
few data atributes to the respective elements on the page, that work with
lastest Google Analitcs.

Follow (@fititnt)[https://twitter.com/fititnt] on Twitter or
(@fititnt)[https://github.com/fititnt] on Github for updates

## Examples

### Click to links

#### Tracking Social Interaction

```html
    <div class="pleme-social-share-wp">
        <h3 class="sr-only">Compartilhar evento</h3>
        <a href="whatsapp://send?text={{ urlencode($evento->titulo . ' ' . Request::url()) }}"
            title="Compartilhar no WhatsApp" target="_blank"
            data-ga-event="click" data-ga-category="Evento/Comartilhar" data-ga-action="Compartilhou/WhatsApp" data-ga-label="Evento_{{ $evento->id }}_{{ $evento->slug }}">
        <span class="pleme-icon-whatsapp" aria-hidden="true"></span>
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?p%5Burl%5D={{ urlencode(Request::url()) }}"
            title="Compartilhar no Facebook" target="_blank"
            data-ga-event="click" data-ga-category="Evento/Comartilhar" data-ga-action="Compartilhou/Facebook" data-ga-label="Evento_{{ $evento->id }}_{{ $evento->slug }}">
        <span class="pleme-icon-facebook" aria-hidden="true"></span>
        </a>
        <a href="https://twitter.com/home?status={{ urlencode($evento->titulo . ' ' . Request::url()) }}"
            title="Compartilhar no Twitter" target="_blank"
            data-ga-event="click" data-ga-category="Evento/Comartilhar" data-ga-action="Compartilhou/Twitter" data-ga-label="Evento_{{ $evento->id }}_{{ $evento->slug }}">
        <span class="pleme-icon-twitter" aria-hidden="true"></span>
        </a>
</div>
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
I would recomend you to install [Google Analytics Debugger)[https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna]


## More information
See https://developers.google.com/analytics/devguides/collection/analyticsjs/events

# Configure for local testing
Just a example to prepare and run. You can ignore it if wanna just use

If code is in folder `/alligo/code/alligo/google-analytics-event-tracking` and
`/alligo/web/_/` is your localhost folder, on a Linux OS, can Symlink with

`ln -s /alligo/code/alligo/google-analytics-event-tracking /alligo/web/_/google-analytics-event-tracking`

Then open your browser. If is listening at port 82, your URL will be
http://localhost:82/google-analytics-event-tracking/