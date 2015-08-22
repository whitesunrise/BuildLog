/**
 * pages/people-v1.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'shuffle'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('shuffle')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Shuffle
   */
  var $grid = $('#shuffle-grid');
  var $filter = $('#shuffle-filter');
  var $sizer = $grid.find('shuffle-sizer');

  /** instatiate shuffle */
  $grid.shuffle({
    itemSelector: '.shuffle',
    sizer: $sizer
  });

  /** Filter options */
  $filter.on('keyup change', function() {
    var val = this.value.toLowerCase();
    $grid.shuffle('shuffle', function($el, shuffle) {

      /** Only search elements in the current group */
      if (shuffle.group !== 'all' && $.inArray(shuffle.group, $el.data('groups')) === -1) {
        return false;
      }

      var text = $.trim($el.find('.panel-body > h5').text()).toLowerCase();
      return text.indexOf(val) !== -1;
    });
  });

  /** Update shuffle on sidebar minimize/maximize */
  $('html')
    .on('fa.sidebar.minimize', function() {
      $grid.shuffle('update');
    })
    .on('fa.sidebar.maximize', function() {
      $grid.shuffle('update');
    });

}));
