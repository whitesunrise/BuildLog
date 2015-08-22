/**
 * pages/timeline-v1.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'magnific',
      'stellar'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('magnific'),
      require('stellar')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Magnific Popup
   */
  $('#photo-list').magnificPopup({
    delegate: '.magnific',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /**
   * Stellar
   */
  $.stellar({
    horizontalScrolling: false
  });

}));
