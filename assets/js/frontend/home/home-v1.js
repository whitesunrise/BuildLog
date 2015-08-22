/**
 * home/home-v1.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'owl-carousel',
      'layerslider'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('owl-carousel'),
      require('layerslider')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Carousel
   */
  $('#customer-reviews').owlCarousel({
    singleItem: true,
    autoPlay: true,
    autoHeight: true
  });
  $('#lovely-client').owlCarousel({
    autoPlay: true,
    autoHeight: true,
    pagination: false
  });

  /**
   * Layerslider
   */
  if ($('#layerslider').length !== 0) {
    $('#layerslider').layerSlider({
      responsive: false,
      responsiveUnder: 1280,
      layersContainer: 1280,
      skin: 'fullwidth',
      hoverPrevNext: false,
      skinsPath: $('body').data('baseurl') + 'plugins/layerslider/skins/'
    });
  }

}));
