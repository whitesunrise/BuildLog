/**
 * forms/imagecrop.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'jcrop'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('jcrop')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * Image Cropping API
   */
  var jcropApi;

  var getRandom = function() {
    var dim = jcropApi.getBounds();
    return [
      Math.round(Math.random() * dim[0]),
      Math.round(Math.random() * dim[1]),
      Math.round(Math.random() * dim[0]),
      Math.round(Math.random() * dim[1])
    ];
  };

  var releaseCheck = function() {
    jcropApi.setOptions({
      allowSelect: true
    });
    $('#can_click').attr('checked', false);
  };

  var initJcrop = function() {
    /** Invoke Jcrop in typical fashion */
    $('#target').Jcrop({
      onRelease: releaseCheck
    }, function() {
      jcropApi = this;
      jcropApi.animateTo([100, 100, 400, 300]);

      /** Setup and dipslay the interface for "enabled" */
      $('#can_click,#can_move,#can_size').attr('checked', 'checked');
      $('#ar_lock,#size_lock,#bg_swap').attr('checked', false);
    });
  };

  /** init Jcrop */
  initJcrop();

  /** Allow new selections */
  $('#can_click').on('change', function() {
    jcropApi.setOptions({
      allowSelect: !!this.checked
    });
    jcropApi.focus();
  });

  /** Selection can be moved */
  $('#can_move').on('change', function() {
    jcropApi.setOptions({
      allowMove: !!this.checked
    });
    jcropApi.focus();
  });

  /** Resizable selection */
  $('#can_size').on('change', function() {
    jcropApi.setOptions({
      allowResize: !!this.checked
    });
    jcropApi.focus();
  });

  /** Aspect ratio */
  $('#ar_lock').on('change', function() {
    jcropApi.setOptions(this.checked ? {
      aspectRatio: 4 / 3
    } : {
      aspectRatio: 0
    });
    jcropApi.focus();
  });

  /** minSize/maxSize setting */
  $('#size_lock').on('change', function() {
    jcropApi.setOptions(this.checked ? {
      minSize: [80, 80],
      maxSize: [250, 250]
    } : {
      minSize: [0, 0],
      maxSize: [0, 0]
    });
    jcropApi.focus();
  });

  /** set select */
  $('#set-select').on('click', function() {
    jcropApi.setSelect(getRandom());
  });

  /** animated to */
  $('#animated-to').on('click', function() {
    jcropApi.animateTo(getRandom());
  });

  /** release */
  $('#release').on('click', function() {
    jcropApi.release();
  });

  /** disable */
  $('#disable').on('click', function() {
    jcropApi.disable();
    $(this).addClass('hide');
    $('#enable').removeClass('hide');
  });

  /** enable */
  $('#enable').on('click', function() {
    jcropApi.enable();
    $(this).addClass('hide');
    $('#disable').removeClass('hide');
  });

  /** distroy */
  $('#unhook').on('click', function() {
    jcropApi.destroy();
    $(this).addClass('hide');
    $('#rehook').removeClass('hide');
  });

  /** attach */
  $('#rehook').on('click', function() {
    initJcrop();
    $(this).addClass('hide');
    $('#unhook').removeClass('hide');
  });

  /** change image */
  $('#change-background').on('click', '.btn', function() {
    var background = $(this).data('background');

    /** set the image */
    jcropApi.setImage(background);

    /** remove active class */
    $('#change-background .btn').each(function(index, value) {
      $(value).removeClass('active');
    });

    /** add active class */
    $(this).addClass('active');
  });

}));
