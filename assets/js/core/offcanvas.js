/**
 * Adminre - Core: offcanvas.js
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
   * CREATE DEFAULTS ONCE
   */
  var container = '[data-toggle~=offcanvas]';
  var pluginErrors = [];
  var direction;
  var optOpenerClass;
  var optCloserClass;

  /**
   * LOOP THROUGH EACH CONTAINER
   */
  $(container).each(function(index, value) {
    /** define variable */
    var options = $(value).data('options');

    /** check for valid options object */
    if (options !== undefined) {
      if (typeof options !== 'object') {
        pluginErrors.push('OffCanvas: `data-options` need to be a valid javascript object!');
      } else {
        /** set value */
        optOpenerClass = 'offcanvas-opener' || options.openerClass;
        optCloserClass = 'offcanvas-closer' || options.closerClass;
      }
    } else {
      /** set default value */
      optOpenerClass = 'offcanvas-opener';
      optCloserClass = 'offcanvas-closer';
    }

    /** check for errors */
    if (pluginErrors.length <= 0) {
      $(value)
        .on('click', '.' + optOpenerClass, function(e) {
          /** get direction */
          if ($(this).hasClass('offcanvas-open-rtl')) {
            direction = 'offcanvas-open-rtl';
          } else {
            direction = 'offcanvas-open-ltr';
          }

          $(value)
            .removeClass('offcanvas-open-ltr offcanvas-open-rtl')
            .addClass(direction);

          /** trigger custom event */
          $('html').trigger(window.adminre.eventPrefix + '.offcanvas.open', {
            'element': $(value)
          });

          /** prevent default */
          e.preventDefault();
        }).on('click', '.' + optCloserClass, function(e) {
          $(value)
            .removeClass('offcanvas-open-ltr offcanvas-open-rtl');

          /** trigger custom event */
          $('html').trigger(window.adminre.eventPrefix + '.offcanvas.close', {
            'element': $(value)
          });

          /** prevent default */
          e.preventDefault();
        });
    } else {
      $.each(pluginErrors, function(index, value) {
        $.error(value);
      });
    }
  });

}));
