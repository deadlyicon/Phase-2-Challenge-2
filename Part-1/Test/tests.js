var assert = require('chai').assert;
var functions = require('../functions');

describe('functions', function() {
  //### Show a weekday
  describe('weekday', function() {
    it('Should return Friday', function() {
      assert.equal(functions.weekday(2017, 6, 16), 'Friday');
    });
    it('Should return Monday', function() {
      assert.equal(functions.weekday(2017, 6, 19), 'Monday');
    });
    it('Should return undefined', function() {
      assert.equal(functions.weekday(30, 130, 4120), undefined);
    });
  });
  //### Get a snippet from text
  describe('snippet', function() {
    it('Should return The world is', function() {
      assert.equal(functions.snippet('The world is quiet here', 12), 'The world is');
    });
    it('Should return The wor', function() {
      assert.equal(functions.snippet('The world is quiet here', 7), 'The wor');
    });
    it('Should return undefined', function() {
      assert.equal(functions.snippet('The world is quiet here', sjif), not defined);
    });
  });
  // ### Number of properties
  describe()
  // ### Filter between
  describe()
});
