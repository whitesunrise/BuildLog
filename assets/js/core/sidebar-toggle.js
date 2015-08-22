/**
 * Adminre - Core: sidebar-toggle.js
 * http://theme.pampersdry.info/adminre/html
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory();
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * CREATE DEFAULTS ONCE
   */
  var pluginName = 'sidebar-toggle';
  var openClass = 'sidebar-open';
  var sidebar = '';

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
      direction: null
    },

    init: function() {
      this.config = $.extend({}, this.defaults, this.options);
      sidebar = this.config.direction === 'ltr' ? '.sidebar-left' : '.sidebar-right';

      if (this.config.direction === null) {
        $.error('missing `data-direction` value (ltr or rtl)');
      }

      return this;
    },

    toggle: function() {
      $('html').hasClass(openClass + '-' + this.config.direction) ? this.close() : this.open();
    },

    open: function() {
      $('html').addClass(openClass + '-' + this.config.direction);
      $('html').trigger(window.adminre.eventPrefix + '.sidebar.open', {
        'element': $(sidebar)
      });
    },

    close: function() {
      if ($('html').hasClass(openClass + '-' + this.config.direction)) {
        $('html').removeClass(openClass + '-' + this.config.direction);
        $('html').trigger(window.adminre.eventPrefix + '.sidebar.close', {
          'element': $(sidebar)
        });
      }
    }
  };

  /**
   * PLUGIN DEFAULTS
   */
  Plugin.defaults = Plugin.prototype.defaults;

  /**
   * PLUGIN WRAPPER
   */
  $.fn.coreSidebarToggle = function(options) {
    return this.each(function() {
      $.data(this, pluginName, new Plugin(this, options).init());
    });
  };

  /**
   * PLUGIN DATA-API
   */
  $(document).on('click', function() {
    if ($(sidebar).length > 0) {
      $('html').removeClass('sidebar-open-rtl sidebar-open-ltr');

      sidebar = '';
    }
  });
  $(document).on('click', '.sidebar, [data-toggle~="sidebar"]', function(e) {
    e.stopPropagation();
  });
  $(document).on('click', '[data-toggle~="sidebar"]', function(e) {
    var $this = $(this);
    var target = 'html';
    var options = $.extend({}, $this.data(pluginName + '-options'), {
      'direction': $this.data('direction')
    });

    $(target).coreSidebarToggle(options).data(pluginName).toggle();

    e.preventDefault();
  });
}));
