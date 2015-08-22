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
    define([
      'parsley'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('parsley')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Login form function
   */
  var $form = $('form[name=form-login]');

  /** On button submit click */
  $form.on('click', 'button[type=submit]', function(e) {
    var $this = $(this);

    /** Run parsley validation */
    if ($form.parsley().validate()) {
      /** Disable submit button */
      $this.prop('disabled', true);

      /**
       * you can do the ajax request here
       * this is for demo purpose only
       */
      setTimeout(function() {
        /** redirect user */
        location.href = 'index.html';
      }, 500);
    } else {
      /** toggle animation */
      $form
        .removeClass('animation animating shake')
        .addClass('animation animating shake')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('animation animating shake');
        });
    }

    /** prevent default */
    e.preventDefault();
  });

}));
