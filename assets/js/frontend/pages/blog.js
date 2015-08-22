/**
 * pages/blog.js
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
      'magnific',
      'shuffle'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('owl-carousel'),
      require('magnific'),
      require('shuffle')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Owl carousel
   */
  $('#gallery-post').owlCarousel({
    lazyLoad: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: true,
    stopOnHover: true,
    navigation: true,
    pagination: false
  });

  /**
   * Magnific popup
   */
  $('.popup-vimeo').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  /**
   * Shuffle
   */
  if ($('#shuffle-grid').length > 0) {
    var $grid = $('#shuffle-grid');
    var $sizer = $grid.find('shuffle-sizer');

    // instatiate shuffle
    $grid.shuffle({
      itemSelector: '.post',
      sizer: $sizer
    });
  }

}));
