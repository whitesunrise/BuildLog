/**
 * Adminre - Core: sidebar-menu.js
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
  var menuHandler = '[data-toggle~=menu]';
  var submenuHandler = '[data-toggle~=submenu]';

  /**
   * HANDLE CLICK
   */
  var handleClick = function(e) {
    var $this = $(this);
    var parent = $this.data('parent');
    var target = $this.data('target');

    /** default click event handler */
    if (e.type === 'click') {
      /** toggle hide and show */
      if ($(target).hasClass('in')) {
        /** hide the submenu */
        $(target).collapse('hide');
        $this.parent().removeClass('open');
      } else {
        /** hide other showed target if parent is defined */
        if (!!parent) {
          $(parent + ' .in').each(function() {
            $(this).collapse('hide');
            $(this).parent().removeClass('open');
          });
        }

        /** show the submenu */
        $(target).collapse('show');
        $this.parent().addClass('open');
      }
    }

    /** run only on tablet view and sidebar-menu collapse */
    if ((window.adminre.isScreensm) || (window.adminre.isMinimize)) {
      /** if have target */
      if ($(target).length > 0) {
        /** touch devices */
        if ($('html').hasClass('touch')) {
          /** click event handler */
          if (e.type === 'click') {
            if ($this.parent().hasClass('hover')) {
              /** remove hover class and clear the `top` css attr val */
              $this.parent().removeClass('hover');
              $(target).css('top', '');
            } else {
              /** remove other opened submenus */
              if (parent) {
                $(parent + ' .hover').each(function(index, elem) {
                  $(elem).removeClass('hover');
                });
              }

              /** add hover class and calculate submenu offset */
              $this.parent().addClass('hover');
              if ($(target)[0].getBoundingClientRect().bottom >= Response.deviceH()) {
                $(target).css('top', '-' + ($(target)[0].getBoundingClientRect().bottom - Response.deviceH() + 2) + 'px');
              }
            }
          }
        }
      }
    }
  };

  /**
   * HANDLE HOVER
   */
  var handleHover = function(e) {
    var $this = $(this);
    //var parent      = $this.children(submenuHandler).data('parent');
    var target = $this.children(submenuHandler).data('target');

    /** run only on tablet view and sidebar-menu collapse */
    if ((window.adminre.isScreensm) || (window.adminre.isMinimize)) {
      /** if have target */
      if ($(target).length > 0) {
        /** touch devices */
        if (!$('html').hasClass('touch')) {

          /** mouseenter event handler */
          if (e.type === 'mouseenter') {
            /** add hover class and calculate submenu offset */
            $this.addClass('hover open');
            if ($(target)[0].getBoundingClientRect().bottom >= Response.deviceH()) {
              $(target).css('top', '-' + ($(target)[0].getBoundingClientRect().bottom - Response.deviceH() + 2) + 'px');
            }
          }

          /** mouseleave event handler */
          if (e.type === 'mouseleave') {
            /** remove hover class and clear the `top` css attr val */
            $this.removeClass('hover open');
            $(target).css('top', '');
          }

        }
      }
    }
  };

  /**
   * ON DOM READY
   */
  $(document).on('click', submenuHandler, handleClick);
  $(document).on('mouseenter mouseleave', menuHandler + ' > li', handleHover);

}));
