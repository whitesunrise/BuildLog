/**
 * components/button.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'ladda',
      'spinjs'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('ladda'),
      require('spinjs')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Ladda button
   */
  Ladda.bind('.btn.ladda-button', {
    timeout: 5000
  });

  /**
   * Bind progress buttons
   */
  Ladda.bind('.btn.ladda-button.ladda-progress', {
    callback: function(instance) {
      var progress = 0;
      var interval = setInterval(function() {
        progress = Math.min(progress + Math.random() * 0.1, 1);
        instance.setProgress(progress);

        if (progress === 1) {
          instance.stop();
          clearInterval(interval);
        }
      }, 200);
    }
  });

}));
