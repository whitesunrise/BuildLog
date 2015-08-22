/**
 * pages/media-gallery.js
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
      'shuffle'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('magnific'),
      require('shuffle')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  $(function() {
    /**
     * Lightbox
     */
    $('#shuffle-grid').magnificPopup({
      delegate: '.magnific',
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /**
     * Shuffle
     */
    var $grid = $('#shuffle-grid');
    var $filter = $('#shuffle-filter');
    var $sort = $('#shuffle-sort');
    var $sizer = $grid.find('shuffle-sizer');

    /** instatiate shuffle */
    $grid.shuffle({
      itemSelector: '.shuffle',
      sizer: $sizer
    });

    /** Filter options */
    $filter.on('click', '.btn', function() {
      var $this = $(this);
      var isActive = $this.hasClass('active');
      var group = isActive ? 'all' : $this.data('group');

      /** Hide current label, show current label in title */
      if (!isActive) {
        $('#shuffle-filter .active').removeClass('active');
      }

      $this.toggleClass('active');

      /** Filter elements */
      $grid.shuffle('shuffle', group);
    });

    /** Sorting options */
    $sort.on('change', function() {
      var sort = this.value;
      var opts = {};

      /** We're given the element wrapped in jQuery */
      if (sort === 'date-created') {
        opts = {
          reverse: true,
          by: function($el) {
            return $el.data('date-created');
          }
        };
      } else if (sort === 'title') {
        opts = {
          by: function($el) {
            return $el.data('title').toLowerCase();
          }
        };
      }

      /** Filter elements */
      $grid.shuffle('sort', opts);
    });

    /** Update shuffle on sidebar minimize/maximize */
    $('html')
      .on('fa.sidebar.minimize', function() {
        $grid.shuffle('update');
      })
      .on('fa.sidebar.maximize', function() {
        $grid.shuffle('update');
      });
  });

}));
