const assert = require('assert');
const { parseText } = require('../src/textParser');

describe('Text Parsing Utilities', function () {
    describe('#parseText()', function () {
        it('should correctly parse the text and return object with word count, characters count, and sentence count', function () {
            const text = 'This is a sample text. It has multiple sentences! And some words.';
            const parsedInfo = parseText(text);
            assert.strictEqual(parsedInfo.wordCount, 12);
            assert.strictEqual(parsedInfo.characters, 65);
            assert.strictEqual(parsedInfo.sentences, 3);
        });
    });
});
