/**!
 * Google Analytics Event Tracking - Alligo Helper
 * @author Emerson Rocha Luiz <emerson at alligo.com.br
 * @see https://github.com/alligo/google-analytics-event-tracking
 */

/* global: google, Pleme */

/* global Pleme */

(function ($, window) {
  window.Pleme = window.Pleme || {};
  window.Pleme.GA = {};
  Pleme.debug = false;

  /**
   * Prepara para enviar eventos ao Google Analytics
   *
   * @example
   * <form
   *      data-ga-event="click"
   *      data-ga-category="Evento/Comartilhar"
   *      data-ga-action="Compartilhou/WhatsApp"
   *      data-ga-label="Evento_7_lorem-ipsum"
   * ></form>
   */
  Pleme.GA.prepareEvents = function () {
    var els = $('[data-ga-event]');
    $.each(els, function (index, value) {
      Pleme.debug && console.log('window.Pleme.GA.prepareEvents', els);
      var el = $(this),
              evEvent = $(this).data('ga-event'),
              evCat = $(this).data('ga-category') || '',
              evAct = $(this).data('ga-action') || '',
              evLab = $(this).data('ga-label') || '',
              evVal = $(this).data('ga-value') || '';

      $(this).on(evEvent, function (elEvent) {
        Pleme.debug && console.log('window.Pleme.GA.prepareEvents', evCat, evAct, evLab, evVal);
        if (evEvent === 'click' || evEvent === 'submit') {
          if (!el.data('ga-done')) {
            Pleme.GA.prepareEventWait(el, elEvent, evEvent, evCat, evAct, evLab, evVal);
          }
        } else {
          try {
            ga('send', 'event', evCat, evAct, evLab, evVal);
          } catch (e) {
            console.log('Pleme.GA.prepareEvents Exception', e);
          }
        }
      });
    });

  };

  /**
   * Alguns eventos, como clique em URL e submissão em formulário, não seriam
   * enviados se não interromper a ação. Essa rotina atrasa o evento padrão
   * para aguardar retorno do Google Analycs, e em 1000ms executa a ação mesmo
   * que o servidores do Google tenham erro.
   *
   * @see Pleme.GA.prepareEvents()
   *
   * @param {DOMElement} el
   * @param {Event}      elEvent
   * @param {String}     evEvent
   * @param {String}     evCat
   * @param {String}     evAct
   * @param {String}     evLab
   * @param {String}     [evVal]
   * @returns {Pleme.GA.prepareEventWait}
   */
  Pleme.GA.prepareEventWait = function (el, elEvent, evEvent, evCat, evAct, evLab, evVal) {
    var fnDestinoDone = false, fnDestino;

    elEvent.preventDefault();

    fnDestino = function () {
      //clearTimeout(t);
      if (fnDestinoDone || $(elEvent).data('ga-done')) {
        return true;
      } else {
        $(el).data('ga-done', 1);
        fnDestinoDone = true;
      }
      //
      if (evEvent === 'click') {
        //
        if (elEvent.target.getAttribute("target") === '_blank') {
          //alert('fnDestino remoto3');
          elEvent.target.click();
          return true;
        } else {
          document.location = $(el).prop('href');
        }

      } else if (evEvent === 'submit') {
        $(el)[0].submit();
      } else {
        console.log('Pleme.GA.prepareEventWait: evento desconhecido', el, evEvent);
      }
    };

    // Se por algum motivo GA demorar para responder, redirecionar sem esperar
    setTimeout(fnDestino, 1000);

    try {
      ga('send', {
        hitType: 'event',
        eventCategory: evCat,
        eventAction: evAct,
        eventLabel: evLab,
        eventValue: evVal || undefined
      }, {
        hitCallback: fnDestino
      });
    } catch (e) {
      console.log('Pleme.GA.prepareEventWait Exception', e);
    }
  };

  /**
   * Inicia todos os eventos do Google Analytics
   */
  Pleme.GA.initAll = function () {
    $(document).ready(function () {
      Pleme.debug && console.log('Pleme.GA.initAll');
      Pleme.GA.prepareEvents();
    });
  };
  //...
})(jQuery, window);

Pleme.GA.initAll();

jQuery('.pleme-form-delete').on('submit', function () {
  return confirm("Tem certeza que quer REMOVER isto?");
});
