/**
 * forms/validation.js
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
      'parsley'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('selectize'),
      require('parsley')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /** Custom select */
  $('select').selectize();

}));
