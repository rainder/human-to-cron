'use strict';

var maps = require('./maps');

module.exports = {
  'each': function (interval) {
    var number = 1;
    if (interval.match(/\d+/)) {
      number = interval;
      interval = this.gen.next().value;
    }

    switch (interval) {
      case 'second':
      case 'seconds':
        this.result[0] = `*/${number}`;
        break;

      case 'minute':
      case 'minutes':
        this.result[0] = `0`;
        this.result[1] = `*/${number}`;
        break;

      case 'hour':
      case 'hours':
        this.result[0] = `0`;
        this.result[1] = `0`;
        this.result[2] = `*/${number}`;
        break;

      case 'day':
      case 'days':
        this.result[0] = `0`;
        this.result[1] = `0`;
        this.result[2] = `0`;
        this.result[3] = `*/${number}`;
        break;

      case 'month':
      case 'months':
        this.result[0] = `0`;
        this.result[1] = `0`;
        this.result[2] = `0`;
        this.result[3] = `0`;
        this.result[4] = `*/${number}`;
        break;
    }
  },

  'midnight': function () {
    this.result[0] = '0';
    this.result[1] = '0';
    this.result[2] = '0';
  },

  'DAY_OF_WEEK': function (day) {
    this.result[3] = maps.days.indexOf(day);
  },

  'MONTH': function (day) {
    this.result[4] = maps.months.indexOf(day);
  },

  'TIME': function (expression) {
    var parts = expression.split(':');

    while (parts.length < 3) {
      parts.push('0');
    }

    for (let index in parts) {
      this.result[2 - index] = +parts[index];
    }
  }
};