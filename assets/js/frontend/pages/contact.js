/**
 * pages/contact.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'gmaps'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('gmaps')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * GMaps - marker
   */
  var marker = new GMaps({
    el: '#gmaps-marker',
    lat: -12.043333,
    lng: -77.028333
  });
  marker.addMarker({
    lat: -12.042,
    lng: -77.028333,
    title: 'Marker with InfoWindow',
    infoWindow: {
      content: '<p>HTML Content</p>'
    }
  });

}));
