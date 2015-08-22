/**
 * pages/dashboard-v1.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'selectize',
      'jquery.flot',
      'jquery.flot.resize',
      'jquery.flot.categories',
      'jquery.flot.time',
      'jquery.flot.tooltip',
      'jquery.flot.spline'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('selectize'),
      require('jquery.flot'),
      require('jquery.flot.resize'),
      require('jquery.flot.categories'),
      require('jquery.flot.time'),
      require('jquery.flot.tooltip'),
      require('jquery.flot.spline')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Selectize
   */
  $('#selectize-customselect').selectize();

  /**
   * Sparkline
   */
  $('.sparklines').sparkline('html', {
    enableTagOptions: true
  });

  /**
   * Area Chart - Spline
   */
  $.plot('#chart-audience', [{
    label: 'Visit (All)',
    color: '#DC554F',
    data: [
      ['Jan', 47],
      ['Feb', 84],
      ['Mar', 60],
      ['Apr', 143],
      ['May', 39],
      ['Jun', 86],
      ['Jul', 87]
    ]
  }, {
    label: 'Visit (Mobile)',
    color: '#9365B8',
    data: [
      ['Jan', 83],
      ['Feb', 32],
      ['Mar', 16],
      ['Apr', 47],
      ['May', 98],
      ['Jun', 84],
      ['Jul', 18]
    ]
  }], {
    series: {
      lines: {
        show: false
      },
      splines: {
        show: true,
        tension: 0.4,
        lineWidth: 2,
        fill: 0.8
      },
      points: {
        show: true,
        radius: 4
      }
    },
    grid: {
      borderColor: 'rgba(0, 0, 0, 0.05)',
      borderWidth: 1,
      hoverable: true,
      backgroundColor: 'transparent'
    },
    tooltip: true,
    tooltipOpts: {
      content: '%x : %y',
      defaultTheme: false
    },
    xaxis: {
      tickColor: 'rgba(0, 0, 0, 0.05)',
      mode: 'categories'
    },
    yaxis: {
      tickColor: 'rgba(0, 0, 0, 0.05)'
    },
    shadowSize: 0
  });

}));
