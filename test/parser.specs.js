'use strict';

var parser = require('./..');
var expect = require('chai').expect;

var tests = [
  ['each minute', '* */1 * * *'],
  ['each 2 minutes', '* */2 * * *'],
  ['each second', '*/1 * * * *'],
  ['each hour', '* * */1 * *'],
  ['each day', '* * * */1 *'],
  ['each month', '* * * * */1'],
  ['each 5 months', '* * * * */5'],
  ['midnight', '0 0 0 * *'],
  ['midnight each 2 minutes', '0 */2 0 * *'],
  ['tuesday each 10 minutes', '* */10 * 1 *'],
  ['friday 15:44', '* 44 15 4 *'],
  ['august friday 15:44', '* 44 15 4 7'],
];


describe('parser tests', function () {

  it('should return expected values', function () {

    for (let test of tests) {

      let result = parser(test[0]);
      expect(result).to.be.equal(test[1]);

    }

  });

});