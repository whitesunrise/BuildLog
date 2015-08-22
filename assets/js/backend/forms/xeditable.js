/**
 * forms/xeditable.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'xeditable'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('xeditable')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  /**
   * text
   */
  $('#xe_username').editable({
    title: 'Enter username'
  });

  /**
   * textarea
   */
  $('#xe_comments').editable({
    title: 'Enter comments',
    rows: 5
  });

  /**
   * select
   */
  $('#xe_status').editable({
    value: 2,
    source: [{
      value: 1,
      text: 'Active'
    }, {
      value: 2,
      text: 'Blocked'
    }, {
      value: 3,
      text: 'Deleted'
    }]
  });

  /**
   * Checklist
   */
  $('#xe_checklist').editable({
    value: [1],
    source: [{
      value: 1,
      text: 'option1'
    }, {
      value: 2,
      text: 'option2'
    }, {
      value: 3,
      text: 'option3'
    }]
  });

  /**
   * Combodate
   */
  $('#xe_combodate').editable({
    format: 'YYYY-MM-DD',
    viewformat: 'DD.MM.YYYY',
    template: 'D / MMMM / YYYY',
    combodate: {
      minYear: 2000,
      maxYear: 2015,
      minuteStep: 1
    }
  });

  /**
   * Dateui
   */
  $('#xe_dateui').editable({
    format: 'yyyy-mm-dd',
    viewformat: 'dd/mm/yyyy',
    datepicker: {
      weekStart: 1
    }
  });

  /**
   * Typehead
   */
  $('#xe_typehead').editable({
    value: 'ru',
    typeahead: {
      name: 'country',
      local: [{
        value: 'ru',
        tokens: ['Russia']
      }, {
        value: 'gb',
        tokens: ['Great Britain']
      }, {
        value: 'us',
        tokens: ['United States']
      }],
      template: function(item) {
        return item.tokens[0] + ' (' + item.value + ')';
      }
    }
  });

}));
