/**
 * Adminre - Core: panel-collapse.js
 * http://theme.pampersdry.info/adminre/html
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'velocity'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('velocity')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * CREATE DEFAULT ONCE
   */
  var toggler = '[data-toggle~=panelcollapse]';

  /**
   * CLICK EVENT
   */
  $(document).on('click', toggler, function(e) {
    /** find panel element */
    var panel = $(this).parents('.panel');
    var target = panel.children('.panel-collapse');
    var height = target.innerHeight();

    /** error handling */
    if (target.length === 0) {
      $.error('collapsable element need to be wrap inside ".panel-collapse"');
    }

    /** core open function */
    var open = function(toggler) {
      $(toggler).removeClass('down').addClass('up');
      $(target)
        .removeClass('pull').addClass('pulling')
        .velocity({
          opacity: [1, 0],
          height: [height, 0]
        }, {
          display: 'block',
          easing: 'easeOutCubic',
          duration: 500,
          complete: function(elem) {
            $(elem)
              .removeClass('pulling').addClass('pull out')
              .removeAttr('style');
          }
        });

      // publish event
      $('html').trigger(window.adminre.eventPrefix + '.panelcollapse.open', {
        'element': $(panel)
      });
    };

    /** core close function */
    var close = function(toggler) {
      $(toggler).removeClass('up').addClass('down');
      $(target)
        .removeClass('pull out').addClass('pulling')
        .velocity({
          opacity: [0, 1],
          height: [0, height]
        }, {
          display: 'block',
          easing: 'easeOutCubic',
          duration: 500,
          complete: function(elem) {
            $(elem)
              .removeClass('pulling').addClass('pull')
              .removeAttr('style');
          }
        });

      // publish event
      $('html').trigger(window.adminre.eventPrefix + '.panelcollapse.close', {
        'element': $(panel)
      });
    };

    /** collapse the element */
    if ($(target).hasClass('out')) {
      close(this);
    } else {
      open(this);
    }

    /** prevent default */
    e.preventDefault();
  });

}));
