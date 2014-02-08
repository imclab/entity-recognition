
/**
 * Module dependencies.
 */

var pos = require('pos');

/**
 * Expose `relation`.
 */

module.exports = relation;

/**
 * A one-liner.
 *
 * @param {String} name
 * @return {Function}
 * @api public
 */

function relation(sentence, pattern) {
  var lexer = new pos.Lexer();
  var tagger = new pos.Tagger();
  var words = lexer.lex(sentence);
  var tags = tagger.tag(words);

  var result = [];
  var index = 0;
  var match = simple[pattern[index++]];
  var found = new Array(pattern.length);

  console.log(tags);

  tags.forEach(test);

  function test(tag) {
    if (!match) return false;

    for (var i = 0, n = match.length; i < n; i++) {
      if (tag[1] == match[i]) {
        result.push(tag[0]);
        found[index] = true;
        return;
      }
    }

    if (found[index]) {
      match = simple[pattern[index++]];
      if (match) test(tag);
    }
  }

  return result.join(' ');
}

var simple = {
  verb: [
    'VB',
    'VBD',
    'VBG',
    'VBN',
    'VBP',
    'VBZ'
  ],
  // noun phrase detection is complex
  noun: [
    'NN',
    'NNP',
    'NNPS',
    'NNS'
  ],
  preposition: [
    'IN'
  ],
  particle: [
    'RP'
  ]
}