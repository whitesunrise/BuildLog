/**
 * components/animation.js
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
   * CLICK EVENT
   */
  $('body').on('click', '.btn-toggle-anim', function(e) {
    /** get animation class and panel */
    var anim = $(this).data('anim');
    var panel = $(this).parents('.panel');

    /** add animation class to panel element */
    panel
      .addClass('animation animating ' + anim)
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animation animating ' + anim);
      });
    e.preventDefault();
  });

}));
