/**
 * pages/dashboard-v2.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */

/* global sample_data */

(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'jquery.flot',
      'jquery.flot.resize',
      'jquery.flot.categories',
      'jquery.flot.time',
      'jquery.flot.tooltip',
      'jquery.flot.spline',
      'owl-carousel',
      'datatables',
      'jqvmap'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('jquery.flot'),
      require('jquery.flot.resize'),
      require('jquery.flot.categories'),
      require('jquery.flot.time'),
      require('jquery.flot.tooltip'),
      require('jquery.flot.spline'),
      require('owl-carousel'),
      require('datatables'),
      require('jqvmap')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Stats Carousel
   */
  $('#stats').owlCarousel({
    items: 4
  });

  /**
   * Stats
   */
  var option = {
    series: {
      lines: {
        show: false
      },
      splines: {
        show: true,
        tension: 0.4,
        lineWidth: 2,
        fill: 0.5
      },
      points: {
        show: true,
        radius: 4
      }
    },
    grid: {
      borderColor: '#eee',
      borderWidth: 1,
      hoverable: true,
      backgroundColor: '#fcfcfc'
    },
    tooltip: true,
    tooltipOpts: {
      content: '%x : %y'
    },
    xaxis: {
      tickColor: '#fcfcfc',
      mode: 'categories'
    },
    yaxis: {
      tickColor: '#eee'
    },
    shadowSize: 0
  };

  /** Stats #1 */
  $.plot('#stats1', [{
    color: '#DC554F',
    data: [
      ['Mon', 5],
      ['Tue', 8],
      ['Wed', 15],
      ['Thu', 6],
      ['Fri', 10]
    ]
  }], option);

  /** Stats #2 */
  $.plot('#stats2', [{
    color: '#3b5998',
    data: [
      ['Mon', 6],
      ['Tue', 3],
      ['Wed', 16],
      ['Thu', 10],
      ['Fri', 6]
    ]
  }], option);

  /** Stats #3 */
  $.plot('#stats3', [{
    color: '#6BCCB4',
    data: [
      ['Mon', 16],
      ['Tue', 8],
      ['Wed', 6],
      ['Thu', 2],
      ['Fri', 4]
    ]
  }], option);

  /** Stats #4 */
  $.plot('#stats4', [{
    color: '#00B1E1',
    data: [
      ['Mon', 0],
      ['Tue', 16],
      ['Wed', 8],
      ['Thu', 6],
      ['Fri', 12]
    ]
  }], option);

  /** Stats #5 */
  $.plot('#stats5', [{
    color: '#FFD66A',
    data: [
      ['Mon', 2],
      ['Tue', 2],
      ['Wed', 4],
      ['Thu', 10],
      ['Fri', 16]
    ]
  }], option);

  /**
   * Column filtering
   */
  var $table = $('table#order-list');
  var oTable = $table.dataTable({
    'aoColumns': [{
        'bSortable': false
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    'oLanguage': {
      'sSearch': 'Search all columns:'
    }
  });

  $table.on('keyup', 'input[type=search]', function() {
    /** Filter on the column (the index) of this element */
    oTable.fnFilter(this.value, $('tfoot input').index(this));
  });

  /**
   * Markers on the world map
   */
  /** load external map data */
  $.when(
    $.getScript($('body').data('baseurl') + 'plugins/jqvmap/js/data/jquery.vmap.sampledata.js'),
    $.getScript($('body').data('baseurl') + 'plugins/jqvmap/js/maps/jquery.vmap.world.js'),
    $.Deferred(function(deferred) {
      $(deferred.resolve);
    })
  ).done(function() {
    /** hide loading indicator */
    $('#world-map-markers').parents('.panel').find('.indicator').removeClass('show');

    /** init the map */
    $('#world-map-markers').vectorMap({
      map: 'world_en',
      backgroundColor: 'transparent',
      color: '#666',
      hoverOpacity: 0.7,
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#00B1E1', '#91C854', '#63D3E9', '#FFD66A', '#ED5466'],
      normalizeFunction: 'polynomial',
      pins: {
        /** marker style-1 */
        'ru': '<a href="javascript:void(0)" class="marker marker-2-3"></a>',
        'lb': '<a href="javascript:void(0)" class="marker marker-2-3"></a>',
        'br': '<a href="javascript:void(0)" class="marker marker-2-3"></a>',
        'au': '<a href="javascript:void(0)" class="marker marker-2-3"></a>',
        'my': '<a href="javascript:void(0)" class="marker marker-2-3"></a>',

        /** marker style-2 */
        'in': '<a href="javascript:void(0)" class="marker marker-2-3"></a>',
        'ca': '<a href="javascript:void(0)" class="marker marker-2-3"></a>',
        'cg': '<a href="javascript:void(0)" class="marker marker-2-3"></a>',
        'dz': '<a href="javascript:void(0)" class="marker marker-2-3"></a>',
        'gl': '<a href="javascript:void(0)" class="marker marker-2-3"></a>'
      }
    });
  });

}));
