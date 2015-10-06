'use strict';

var parser = require('./..');
var expect = require('chai').expect;


describe('parser tests', function () {
  it('should return expected values', function () {

    expect(parser('each minute')).to.be.equal('* */1 * * * *');
    expect(parser('each 2 minutes')).to.be.equal('* */2 * * * *');
    expect(parser('each second')).to.be.equal('*/1 * * * * *');
    expect(parser('each hour')).to.be.equal('* * */1 * * *');
    expect(parser('each day')).to.be.equal('* * * * * */1');
    expect(parser('each day each minute')).to.be.equal('* */1 * * * */1');
    expect(parser('each month')).to.be.equal('* * * * */1 *');
    expect(parser('each 5 months')).to.be.equal('* * * * */5 *');
    expect(parser('every minute')).to.be.equal('* */1 * * * *');
    expect(parser('every 2 minutes')).to.be.equal('* */2 * * * *');
    expect(parser('every second')).to.be.equal('*/1 * * * * *');
    expect(parser('every hour')).to.be.equal('* * */1 * * *');
    expect(parser('every day')).to.be.equal('* * * * * */1');
    expect(parser('every day each minute')).to.be.equal('* */1 * * * */1');
    expect(parser('every month')).to.be.equal('* * * * */1 *');
    expect(parser('every 5 months')).to.be.equal('* * * * */5 *');
    expect(parser('midnight')).to.be.equal('0 0 0 * * *');
    expect(parser('midnight each 2 minutes')).to.be.equal('0 */2 0 * * *');
    expect(parser('tuesday each 10 minutes')).to.be.equal('* */10 * * * 2');
    expect(parser('midnight every 2 minutes')).to.be.equal('0 */2 0 * * *');
    expect(parser('tuesday every 10 minutes')).to.be.equal('* */10 * * * 2');
    expect(parser('friday 15:44')).to.be.equal('0 44 15 * * 5');
    expect(parser('august friday 15:44')).to.be.equal('0 44 15 * 7 5');
    expect(parser('23:55')).to.be.equal('0 55 23 * * *');
    expect(parser('monday 23:55')).to.be.equal('0 55 23 * * 1');
    expect(parser('23:55:22')).to.be.equal('22 55 23 * * *');
    expect(parser('23:00 each second')).to.be.equal('*/1 0 23 * * *');
    expect(parser('23:00 every second')).to.be.equal('*/1 0 23 * * *');
    expect(parser('may tuesday')).to.be.equal('* * * * 4 2');
    expect(parser('may tuesday midnight')).to.be.equal('0 0 0 * 4 2');
    expect(parser('once each hour')).to.be.equal('0 0 */1 * * *');
    expect(parser('once each 2 months')).to.be.equal('0 0 0 * */2 0');
    expect(parser('once each 2 months at 14:00')).to.be.equal('0 0 14 * */2 0');
    expect(parser('once each 5 hours')).to.be.equal('0 0 */5 * * *');
    expect(parser('once each 2 months')).to.be.equal('0 0 0 * */2 0');
    expect(parser('once every hour')).to.be.equal('0 0 */1 * * *');
    expect(parser('once every 2 months')).to.be.equal('0 0 0 * */2 0');
    expect(parser('once every 2 months at 14:00')).to.be.equal('0 0 14 * */2 0');
    expect(parser('once every 5 hours')).to.be.equal('0 0 */5 * * *');
    expect(parser('once every 2 months')).to.be.equal('0 0 0 * */2 0');
    expect(parser('once')).to.be.equal('0 0 0 0 0 0');
    expect(parser('once at wednesday')).to.be.equal('0 0 0 * * 3');
    expect(parser('wednesday midnight')).to.be.equal('0 0 0 * * 3');
    expect(parser('once each 5 hours offset 10 minutes')).to.be.equal('0 10 */5 * * *');
    expect(parser('once every 5 hours offset 10 minutes')).to.be.equal('0 10 */5 * * *');

  });
});
