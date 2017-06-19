var assert = require('chai').assert;
var functions = require('../functions');

//### Show a weekday

describe ('functions', function() {
  it('Should return Friday', function() {
    assert.equal(functions.weekday(2017, 6, 16), 'Friday');
  });
  it('Should return Monday', function() {
    assert.equal(functions.weekday(2017, 6, 19), 'Monday');
  });
  it('Should return failing', function() {
    assert.equal(functions.weekday(a, b, c), 'failing');
  })
});

//### Get a snippet from text

// ### Number of properties

// ### Filter between
