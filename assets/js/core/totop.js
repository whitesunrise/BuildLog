/**
 * Adminre - Core: totop.js
 * http://theme.pampersdry.info/adminre/html
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'velocity'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('velocity')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * CREATE DEFAULTS ONCE
   */
  var pluginName = 'totop';

  /**
   * PLUGIN CONSTRUCTOR
   */
  var Plugin = function(elem, options) {
    this.elem = elem;
    this.$elem = $(elem);
    this.options = options;
  };

  /**
   * PLUGIN PROTOTYPE
   */
  Plugin.prototype = {
    defaults: {
      easing: [0.165, 0.84, 0.44, 1],
      duration: 500,
      delay: 0
    },

    init: function() {
      this.config = $.extend({}, this.defaults, this.options);

      var totop = this;

      totop.$elem.velocity('scroll', {
        easing: totop.config.easing,
        duration: totop.config.duration,
        delay: totop.config.delay
      });

      return totop;
    }
  };

  /**
   * PLUGIN DEFAULTS
   */
  Plugin.defaults = Plugin.prototype.defaults;

  /**
   * PLUGIN WRAPPER
   */
  $.fn.coreTotop = function(options) {
    return this.each(function() {
      $.data(this, pluginName, new Plugin(this, options).init());
    });
  };

  /**
   * PLUGIN DATA-API
   */
  $(document).on('click', '[data-toggle~="' + pluginName + '"]', function(e) {
    var target = $(this).data(pluginName + '-target') || 'html';
    var options = $(this).data(pluginName + '-options');

    $(target).coreTotop(options);

    e.preventDefault();
  });
}));
