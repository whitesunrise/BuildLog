/**
 * shop/shop.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'jquery-ui'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('jquery-ui')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Range slider
   */
  $('#price-range-slider').each(function() {
    $(this).slider({
      range: true,
      min: 0,
      max: 200,
      values: [0, 200],
      step: 10,
      slide: function(event, ui) {
        $('#price-range-form input[name="price-start"]').val(ui.values[0]);
        $('#price-range-form input[name="price-end"]').val(ui.values[1]);
      }
    });
  });

}));
