'use strict';

var Tokens = require('./tokens');
var tokensMap = require('./maps').tokens;

module.exports = parser;

/**
 *
 * @param expression
 * @returns {string}
 */
function parser(expression) {
  var gen = splitString(expression.toLowerCase());
  var word;

  var ctx = {
    gen: gen,
    result: ['*', '*', '*', '*', '*']
  }

  while (!(word = gen.next()).done) {
    if (word.value === 'each') {
      Tokens.each.call(ctx, gen.next().value);
    } else

    if (tokensMap.hasOwnProperty(word.value)) {
      Tokens[tokensMap[word.value]].call(ctx, word.value);
    } else

    if (word.value.match(/^[\d:]+$/)) {
      Tokens.TIME.call(ctx, word.value);
    } else

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
  var parts = expression.split(/[ ]+/);
  for (let i = 0; i < parts.length; i++) {
    yield parts[i];
  }
}