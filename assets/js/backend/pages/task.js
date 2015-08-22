/**
 * pages/task.js
 *
 * Copyright 2014-2015 John Pozy
 * Licensed: http://themeforest.net/licenses
 */
(function(factory) {

  'use strict';

  if (typeof define === 'function' && define.amd) {
    /** AMD. Register as an anonymous module. */
    define([
      'shuffle',
      'jquery-ui',
      'select2',
      'parsley'
    ], factory);
  } else if (typeof exports === 'object') {
    /** Node/CommonJS */
    module.exports = factory(
      require('shuffle'),
      require('jquery-ui'),
      require('select2'),
      require('parsley')
    );
  } else {
    /** Browser globals */
    factory();
  }
}(function() {

  'use strict';

  var $grid = $('#shuffle-grid');
  var $sort = $('#shuffle-sort');
  var $sizer = $grid.find('shuffle-sizer');

  /** instatiate shuffle */
  $grid.shuffle({
    itemSelector: '.task',
    sizer: $sizer
  });

  /** Sort options */
  $sort.on('change', function() {
    var sort = this.value;
    var opts = {};

    if (sort === 'date-due') {
      opts = {
        reverse: true,
        by: function($el) {
          return $el.data('date-due');
        }
      };
    } else if (sort === 'priority') {
      opts = {
        by: function($el) {
          return $el.data('priority');
        }
      };
    }

    /** Filter elements */
    $grid.shuffle('sort', opts);
  });

  /** Datepicker */
  $('input[name="due-date"]').datepicker({
    dateFormat: 'yy-m-d'
  });

  /** select2 */
  $('select[name="participant"]').select2();

  /** on form submit */
  $('form#form-task')
    .on('submit', function(e) {
      e.preventDefault();
    })
    .on('click', 'button[type="submit"]', function() {
      if ($('form#form-task').parsley().isValid()) {
        /** task template via Mustache */
        var template = $('#task-template').html();
        var rendered = Mustache.render(template, {
          totalParticipant: $('select[name="participant"]').select2('val').length,
          participant: function() {
            var participant = [];
            $.each($('select[name="participant"]').select2('val'), function(index, value) {
              participant.push({
                'name': $('select[name="participant"] option[value="' + value + '"]').text(),
                'avatar': 'avatar' + value
              });
            });
            return participant;
          },
          checkboxId: $('.task').length + 1,
          taskName: $('input[name="task-name"]').val(),
          projectText: $('select[name="project"] option:selected').text(),
          dueDate: $('input[name="due-date"]').val(),
          badgeContextual: function() {
            if ($('select[name="priority"]').val() === '1') {
              return 'danger';
            } else if ($('select[name="priority"]').val() === '2') {
              return 'warning';
            } else if ($('select[name="priority"]').val() === '3') {
              return 'success';
            }
          },
          priority: $('select[name="priority"]').val(),
          priorityText: $('select[name="priority"] option:selected').text(),
          categoryText: $('select[name="category"] option:selected').text()
        });
        var $rendered = $(rendered);

        /** prepend task and reshuffle */
        $grid.prepend($rendered).shuffle('appended', $rendered);
      }
    });

  /** Update shuffle on sidebar minimize/maximize */
  $('html')
    .on('fa.sidebar.minimize', function() {
      $grid.shuffle('update');
    })
    .on('fa.sidebar.maximize', function() {
      $grid.shuffle('update');
    });

}));
