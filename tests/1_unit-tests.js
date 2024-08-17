const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator;

suite('Unit Tests', () => {
  beforeEach(() => {
    translator = new Translator();
  });

  suite('American to British English Translations', () => {
    // #1
    test('Mangoes are my favorite fruit.', (done) => {
      const phrase = 'Mangoes are my favorite fruit.';
      const locale = 'american-to-british';
      const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #2
    test('I ate yogurt for breakfast.', (done) => {
      const phrase = 'I ate yogurt for breakfast.';
      const locale = 'american-to-british';
      const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #3
    test('We had a party at my friend\'s condo.', (done) => {
      const phrase = 'We had a party at my friend\'s condo.';
      const locale = 'american-to-british';
      const expected = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    }); 
    
    // #4
    test('Can you toss this in the trashcan for me?', (done) => {
      const phrase = 'Can you toss this in the trashcan for me?';
      const locale = 'american-to-british';
      const expected = 'Can you toss this in the <span class="highlight">bin</span> for me?'; 
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #5
    test('The parking lot was full.', (done) => {
      const phrase = 'The parking lot was full.';
      const locale = 'american-to-british';
      const expected = 'The <span class="highlight">car park</span> was full.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #6
    test('Like a high tech Rube Goldberg machine.', (done) => {
      const phrase = 'Like a high tech Rube Goldberg machine.';
      const locale = 'american-to-british';
      const expected = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #7
    test('To play hooky means to skip class or work.', (done) => {
      const phrase = 'To play hooky means to skip class or work.';
      const locale = 'american-to-british';
      const expected = 'To <span class="highlight">bunk off</span> means to skip class or work.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #8
    test('No Mr. Bond, I expect you to die.', (done) => {
      const phrase = 'No Mr. Bond, I expect you to die.';
      const locale = 'american-to-british';
      const expected = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });    
  })
});
