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
      'shuffle'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('owl-carousel'),
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
  if ($('#carousel1').length > 0) {
    $('#carousel1').owlCarousel({
      lazyLoad: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      autoPlay: true,
      stopOnHover: true
    });
  }
  if ($('#carousel2').length > 0) {
    $('#carousel2').owlCarousel({
      lazyLoad: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      pagination: false,
      navigation: true,
      autoPlay: true,
      stopOnHover: true
    });
  }

  /**
   * Shuffle
   */
  if ($('#shuffle-grid').length > 0) {
    /** Shuffle */
    var $grid = $('#shuffle-grid');
    var $sizer = $grid.find('shuffle-sizer');

    /** instatiate shuffle */
    $grid.shuffle({
      itemSelector: '.post',
      sizer: $sizer
    });

    /** Update shuffle on sidebar minimize/maximize */
    $('html')
      .on('fa.sidebar.minimize', function() {
        $grid.shuffle('update');
      })
      .on('fa.sidebar.maximize', function() {
        $grid.shuffle('update');
      });
  }

}));
