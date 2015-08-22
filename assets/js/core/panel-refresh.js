/**
 * Adminre - Core: panel-refresh.js
 * http://theme.pampersdry.info/adminre/html
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory();
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * CREATE DEFAULT ONCE
   */
  var isDemo = false;
  var indicatorClass = 'indicator';
  var toggler = '[data-toggle~=panelrefresh]';

  /**
   * CLICK EVENT
   */
  $(document).on('click', toggler, function(e) {
    /** find panel element */
    var panel = $(this).parents('.panel');
    var indicator = panel.find('.' + indicatorClass);

    /** check if demo or not */
    if ($(this).hasClass('demo')) {
      isDemo = true;
    } else {
      isDemo = false;
    }

    /** check indicator */
    if (indicator.length !== 0) {
      indicator.addClass('show');

      /** check if demo or not */
      if (isDemo) {
        setTimeout(function() {
          indicator.removeClass('show');
        }, 2000);
      }

      /** publish event */
      $('html').trigger(window.adminre.eventPrefix + '.panelrefresh.refresh', {
        'element': $(panel)
      });
    } else {
      $.error('There is no `indicator` element inside this panel.');
    }

    /** prevent default */
    e.preventDefault();
  });

}));
