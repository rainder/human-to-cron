'use strict';

var Tokens = require('./tokens');
var maps = require('./maps');

module.exports = parser;

/**
 *
 * @param expression
 * @returns {string}
 */
function parser(expression) {
  const gen = splitString(expression.toLowerCase());
  let word;

  const ctx = {
    gen: gen,
    result: ['*', '*', '*', '*', '*', '*']
  }

  while (!(word = gen.next()).done) {

    if (maps.tokens.hasOwnProperty(word.value)) {
      Tokens[maps.tokens[word.value]].call(ctx, word.value);
    } else

    if (word.value.match(/^[\d:]+$/)) {
      Tokens.TIME.call(ctx, word.value);
    } else
    //
    //if (match = word.value.match(/^(\d+)(th|rd|st)$/)) {
    //  let day = maps.days[match[1] - 1];
    //  Tokens.DAY_OF_WEEK.call(ctx, day);
    //} else

    if (Tokens.hasOwnProperty(word.value)) {
      Tokens[word.value].call(ctx);
    }
  }

  return ctx.result.join(' ');
}

/**
 *
 * @param expression
 * @generator
 */
function *splitString(expression) {
  const parts = expression.split(/[ ]+/);
  for (let i = 0; i < parts.length; i++) {
    i += (yield parts[i]) || 0;
  }
}