/**
 * components/carousel.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'owl-carousel'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('owl-carousel')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /** default */
  $('#default').owlCarousel();

  /** autoplay */
  $('#auto-play').owlCarousel({
    autoPlay: true
  });

  /** lazy load */
  $('#lazy-load').owlCarousel({
    lazyLoad: true
  });

  /** one slide */
  $('#one-slide').owlCarousel({
    navigation: true,
    singleItem: true
  });

}));
