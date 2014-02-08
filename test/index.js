
var relation = require('..');
var assert = require('assert');

// tests based on this:
// https://homes.cs.washington.edu/~afader/bib_pdf/ijcai11.pdf

describe('pos', function(){
  it('should parse verb', function(){
    var val = relation('Bananas are yellow', [ 'verb' ]);
    assert.equal(val, 'are');
  });

  it('should parse verb + preposition', function(){
    var val = relation('Trees are located in the forest', [ 'verb', 'preposition' ]);
    assert.equal(val, 'are located in');
  });

  it('should parse verb + particle', function(){
    // var val = relation('The phone is off the hook', [ 'verb', 'particle' ]);
    // assert.equal(val, 'is off');
  });

  it('should parse verb + noun + preposition', function(){
    var val = relation('Hydrogen has an atomic weight of 1.00794 u', [ 'verb', 'noun', 'preposition' ]);
    assert.equal(val, 'has an atomic weight weight of');
  });
});