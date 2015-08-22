/**
 * Adminre - Core: waypoints.js
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
      'waypoints'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('waypoints')
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
  var toggler = '[data-toggle~=waypoints]';

  /**
   * LOOP THROUGH EACH TOGGLER
   */
  $(toggler).each(function() {
    var wayShowAnimation = $(this).data('showanim') || 'fadeIn';
    var wayHideAnimation = $(this).data('hideanim') || false;
    var wayOffset = $(this).data('offset') || '80%';
    var wayMarker = $(this).data('marker') || this;

    /** waypoints core */
    $(wayMarker).waypoint({
      handler: function(direction) {
        if (direction === 'down') {
          $(wayMarker)
            .removeClass(wayHideAnimation + ' animated')
            .addClass(wayShowAnimation + ' animating')
            .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this)
                .removeClass('animating')
                .addClass('animated')
                .removeClass(wayShowAnimation);
            });
        }
        if ((direction === 'up') && (wayHideAnimation !== false)) {
          $(wayMarker)
            .removeClass(wayShowAnimation + ' animated')
            .addClass(wayHideAnimation + ' animating')
            .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this)
                .removeClass('animating')
                .removeClass('animated')
                .removeClass(wayHideAnimation);
            });
        }
      },
      continuous: true,
      offset: wayOffset
    });
  });

}));
