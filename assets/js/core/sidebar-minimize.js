/**
 * Adminre - Core: sidebar-minimizer.js
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
  var minimizeHandler = '[data-toggle~=minimize]';

  /**
   * CORE MINIMIZE FUNCTION
   */
  var toggleMinimize = function(e) {
    /** toggle class */
    if ($('html').hasClass('sidebar-minimized')) {
      window.adminre.isMinimize = false;
      $('html').removeClass('sidebar-minimized');

      /** publish event */
      $('html').trigger(window.adminre.eventPrefix + '.sidebar.maximize');
    } else {
      window.adminre.isMinimize = true;
      $('html').addClass('sidebar-minimized');

      /** publish event */
      $('html').trigger(window.adminre.eventPrefix + '.sidebar.minimize');
    }

    /** prevent default */
    e.preventDefault();
  };

  /**
   * CLICK EVENT
   */
  $(document).on('click', minimizeHandler, toggleMinimize);

}));
