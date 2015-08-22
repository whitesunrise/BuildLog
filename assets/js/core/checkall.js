/**
 * Adminre - Core: checkall.js
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
  var toggler = '[data-toggle~=checkall]';

  /**
   * LOOP THROUGH EACH TOGGLER
   */
  $(toggler).each(function() {
    if ($(this).is(':checked')) {
      checked();
    }
  });

  /**
   * ON CLICK EVENT
   */
  $(document).on('change', toggler, function() {
    var target = $(this).data('target');

    // checked / unchecked
    if ($(this).is(':checked')) {
      checked(target);
    } else {
      unchecked(target);
    }
  });

  /**
   * CORE CHECKED FUNCTION
   */
  var checked = function(target) {
    // find checkbox
    $(target).find('input[type=checkbox]').each(function() {
      // select row
      if ($(this).data('toggle') === 'selectrow') {
        // trigger change event
        if (!$(this).is(':checked')) {
          $(this)
            .prop('checked', true)
            .trigger('change');
        }
      }
    });

    // publish event
    $('html').trigger(window.adminre.eventPrefix + '.checkall.checked', {
      'element': $(target)
    });
  };

  /**
   * CORE UNCHECKED FUNCTION
   */
  var unchecked = function(target) {
    // find checkbox
    $(target).find('input[type=checkbox]').each(function() {
      // select row
      if ($(this).data('toggle') === 'selectrow') {
        // trigger change event
        if ($(this).is(':checked')) {
          $(this)
            .prop('checked', false)
            .trigger('change');
        }
      }
    });

    // publish event
    $('html').trigger(window.adminre.eventPrefix + '.checkall.unchecked', {
      'element': $(target)
    });
  };

}));
