var entityRecognition = 'undefined' == typeof window
  ? require('..')
  : require('entity-recognition'); // how to do this better?

var assert = require('assert');

describe('entityRecognition', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
