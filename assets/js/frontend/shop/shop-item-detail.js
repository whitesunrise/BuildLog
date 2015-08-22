/**
 * shop/shop-item-detail.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'layerslider'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('layerslider')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Layer slider
   */
  $('#layerslider').layerSlider({
    autoStart: false,
    skin: 'fullwidth',
    hoverPrevNext: false,
    navStartStop: false,
    showCircleTimer: false,
    skinsPath: '../plugins/layerslider/skins/'
  });

  /**
   * Touch spin
   */
  $('form[name="add-to-cart"] input[name="quantity"]').TouchSpin({
    initval: 1,
    verticalbuttons: true,
    verticalupclass: 'glyphicon glyphicon-plus',
    verticaldownclass: 'glyphicon glyphicon-minus'
  });

}));
