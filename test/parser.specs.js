'use strict';

var parser = require('./..');
var expect = require('chai').expect;

var tests = [
  ['each minute', '0 */1 * * *'],
  ['each 2 minutes', '0 */2 * * *'],
  ['each second', '*/1 * * * *'],
  ['each hour', '0 0 */1 * *'],
  ['each day', '0 0 0 */1 *'],
  ['each day each minute', '0 */1 0 */1 *'],
  ['each month', '0 0 0 0 */1'],
  ['each 5 months', '0 0 0 0 */5'],
  ['midnight', '0 0 0 * *'],
  ['midnight each 2 minutes', '0 */2 0 * *'],
  ['tuesday each 10 minutes', '0 */10 * 1 *'],
  ['friday 15:44', '0 44 15 4 *'],
  ['august friday 15:44', '0 44 15 4 7'],
  ['23:55', '0 55 23 * *'],
  ['monday 23:55', '0 55 23 0 *'],
  ['23:55:22', '22 55 23 * *'],
  ['23:00 each second', '*/1 0 23 * *'],
];


describe('parser tests', function () {
  it('should return expected values', function () {
    for (let test of tests) {
      let result = parser(test[0]);
      expect(result).to.be.equal(test[1]);
    }
  });
});