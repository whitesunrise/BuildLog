/**
 * Adminre - Core: inview.js
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
      'waypoints'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('waypoints')
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
  var toggler = '[data-toggle~=inview]';

  /**
   * LOOP THROUGH EACH TOGGLER
   */
  $(toggler).each(function() {
    var inviewEnterClass = $(this).data('enter-class') || 'inview-enter';
    var inviewEnteredClass = $(this).data('entered-class') || 'inview-entered';
    var inviewExitClass = $(this).data('exit-class') || 'inview-exit';
    var inviewExitedClass = $(this).data('exited-class') || 'inview-exited';

    new Waypoint.Inview({
      element: this,
      enter: function() {
        $(this.element)
          .removeClass(inviewEnteredClass)
          .removeClass(inviewExitClass)
          .removeClass(inviewExitedClass)
          .addClass(inviewEnterClass);
      },
      entered: function() {
        $(this.element)
          .removeClass(inviewEnterClass)
          .removeClass(inviewExitClass)
          .removeClass(inviewExitedClass)
          .addClass(inviewEnteredClass);
      },
      exit: function() {
        $(this.element)
          .removeClass(inviewEnterClass)
          .removeClass(inviewEnteredClass)
          .removeClass(inviewExitedClass)
          .addClass(inviewExitClass);
      },
      exited: function() {
        $(this.element)
          .removeClass(inviewEnterClass)
          .removeClass(inviewEnteredClass)
          .removeClass(inviewExitClass)
          .addClass(inviewExitedClass);
      }
    });
  });

}));
