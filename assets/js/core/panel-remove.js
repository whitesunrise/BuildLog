/**
 * Adminre - Core: panel-remove.js
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
   * CREATE DEFAULT ONCE
   */
  var panel;
  var parent;
  var handler = '[data-toggle~=panelremove]';

  /**
   * CLICK EVENT
   */
  $(document).on('click', handler, function(e) {
    /** find panel element */
    panel = $(this).parents('.panel');
    parent = $(this).data('parent');

    /** remove panel */
    panel.velocity({
      opacity: 0,
      scale: 0
    }, {
      easing: 'easeOutCubic',
      duration: 500,
      complete: function(elem) {
        //remove
        if (parent) {
          $(elem).parents(parent).remove();
        } else {
          $(elem).remove();
        }

        /** publish event */
        $('html').trigger(window.adminre.eventPrefix + '.panelcollapse.remove', {
          'element': $(panel)
        });
      }
    });

    /** prevent default */
    e.preventDefault();
  });

}));
