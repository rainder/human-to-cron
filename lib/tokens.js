'use strict';

const maps = require('./maps');

module.exports = {
  'once': once,
  'each': each,
  'every': each,
  'offset': offset,
  'midnight': midnight,

  'DAY_OF_WEEK': function (day) {
    this.result[5] = maps.days.indexOf(day);
  },

  'MONTH': function (day) {
    this.result[4] = maps.months.indexOf(day);
  },

  'TIME': function (expression) {
    let parts = expression.split(':');

    while (parts.length < 3) {
      parts.push('0');
    }

    for (let index in parts) {
      this.result[2 - index] = +parts[index];
    }
  }
};

/**
 *
 */
function midnight() {
  this.result[0] = '0';
  this.result[1] = '0';
  this.result[2] = '0';
}

/**
 *
 */
function once() {
  let nextWord = this.gen.next().value;

  if (nextWord === 'each' || nextWord === 'every') {
    let interval = this.gen.next().value;
    let offset = -3;

    if (interval.match(/^\d+$/)) {
      interval = this.gen.next().value;
      offset = -4;
    }

    switch (interval) {
      case 'minute':
      case 'minutes':
        this.result[0] = '0';
        break;
      case 'hour':
      case 'hours':
        this.result[0] = '0';
        this.result[1] = '0';
        break;
      case 'day':
      case 'days':
        this.result[0] = '0';
        this.result[1] = '0';
        this.result[2] = '0';
        break;
      case 'month':
      case 'months':
        this.result[0] = '0';
        this.result[1] = '0';
        this.result[2] = '0';
        this.result[5] = '0';
        break;
    }

    this.gen.next(offset);
  } else

  if (nextWord === 'at') {
    let word = this.gen.next().value;
    let index;

    if (~(index = maps.days.indexOf(word))) {
      this.result[0] = '0';
      this.result[1] = '0';
      this.result[2] = '0';
      this.result[5] = index;
    }

  } else {
    this.gen.next(-2);
    this.result = this.result.map(function () {
      return '0';
    });
  }
}

/**
 *
 */
function each() {
  let interval = this.gen.next().value;
  let number = 1;

  if (interval.match(/\d+/)) {
    number = interval;
    interval = this.gen.next().value;
  }

  switch (interval.replace(/s$/, '')) {
    case 'second':
      this.result[0] = `*/${number}`;
      break;

    case 'minute':
      this.result[1] = `*/${number}`;
      break;

    case 'hour':
      this.result[2] = `*/${number}`;
      break;

    case 'day':
      this.result[5] = `*/${number}`;
      break;

    case 'month':
      this.result[4] = `*/${number}`;
      break;
  }
}

/**
 *
 */
function offset() {
  const number = Number(this.gen.next().value);
  const interval = this.gen.next().value.replace(/s$/, '');

  switch (interval) {
    case 'second':
      this.result[0] = (+this.result[0] || 0) + number;
      break;
    case 'minute':
      this.result[1] = (+this.result[1] || 0) + number;
      break;
    case 'hour':
      this.result[2] = (+this.result[2] || 0) + number;
      break;
    case 'day':
      this.result[5] = (+this.result[5] || 0) + number;
      break;
    case 'month':
      this.result[4] = (+this.result[4] || 0) + number;
      break;
  }
}
