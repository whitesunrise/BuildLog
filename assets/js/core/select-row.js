/**
 * Adminre - Core: select-row.js
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
  var contextual;
  var toggler = '[data-toggle~=selectrow]';
  var target = $(toggler).data('target');

  /**
   * CORE SELECTROW FUNCTION
   * @state: checked/unchecked
   */
  var selectrow = function(row, state) {
    // contextual
    if ($(row).data('contextual')) {
      contextual = $(row).data('contextual');
    } else {
      contextual = 'active';
    }

    if (state === 'checked') {
      // add contextual class
      $(row).parents(target).addClass(contextual);

      // publish event
      $('html').trigger(window.adminre.eventPrefix + '.selectrow.selected', {
        'element': $(row).parents(target)
      });
    } else {
      // remove contextual class
      $(row).parents(target).removeClass(contextual);

      // publish event
      $('html').trigger(window.adminre.eventPrefix + '.selectrow.unselected', {
        'element': $(row).parents(target)
      });
    }
  };

  /**
   * LOOP THROUGH EACH TOGGLER
   */
  $(toggler).each(function() {
    if ($(this).is(':checked')) {
      selectrow(this, 'checked');
    }
  });

  /**
   * CLICK EVENT
   */
  $(document).on('change', toggler, function() {
    /** checked / unchecked */
    if ($(this).is(':checked')) {
      selectrow(this, 'checked');
    } else {
      selectrow(this, 'unchecked');
    }
  });

}));
