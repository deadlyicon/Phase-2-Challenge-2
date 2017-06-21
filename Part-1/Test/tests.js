var assert = require('chai').assert;
var functions = require('../functions');
var chai = require('chai');

describe('functions', function() {
  //### Show a weekday
  describe('weekday', function() {
    it('Should return Friday', function() {
      var date= new Date("2017, 6, 16");
      assert.equal(functions.weekday(date), 'Friday');
    });
    it('Should return Monday', function() {
      var date=new Date("2017, 6, 19");
      assert.equal(functions.weekday(date), 'Monday');
    });
    it('Should return undefined', function() {
      var date=new Date("hello");
      assert.equal(functions.weekday(date), undefined);
    });
  });
  //### Get a snippet from text
  describe('snippet', function() {
    it('Should return The world is...', function() {
      assert.equal(functions.snippet('The world is quiet here', 12), 'The world is...');
    });
    it('Should return The world is quiet here', function() {
      assert.equal(functions.snippet('The world is quiet here', 50), 'The world is quiet here');
    });
    it('Should return ...', function() {
      assert.equal(functions.snippet('hello', "three"), '...');
    });
  });
  // ### Number of properties
  describe('numProps', function() {
    it('Should return 4', function() {
      var object = {
          "id": 1,
          "rep_name": "Xymenes Dewer",
          "company": "Beahan, Swift and Hoppe",
          "no_employees": 742
        }
      assert.equal(functions.numProps(object), 4);
    });
    it('Should return 0', function() {
      var object = {}
      assert.equal(functions.numProps(object), 0);
    });
    it('Should return 0', function() {
      var object = {"x":"y"};
      assert.equal(functions.numProps(object), 1);
    });
  });
  // ### Filter between
  describe('filterBetween', function() {
    it('Should return 3', function() {
      var array = [1,2,3,4,5];
      var newArray = functions.filterBetween(array, 2, 4);
      assert.equal(newArray.length, 3);
    });
    it('Should return 5', function() {
      var array = [1,2,3,4,5,6,7,8];
      var newArray = functions.filterBetween(array, 3, 7);
      assert.equal(newArray.length, 5);
    });
    it('Should return 0', function() {
      var array = ["hello"];
      var newArray = functions.filterBetween(array, 2, 4);
      assert.equal(newArray.length, 0);
    });
  });
});
