const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const { test } = require('mocha');
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

    // #9
    test('Dr. Grosh will see you now.', (done) => {
      const phrase = 'Dr. Grosh will see you now.';
      const locale = 'american-to-british';
      const expected = '<span class="highlight">Dr</span> Grosh will see you now.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #10
    test('Lunch is at 12:15 today.', (done) => {
      const phrase = 'Lunch is at 12:15 today.';
      const locale = 'american-to-british';
      const expected = 'Lunch is at <span class="highlight">12.15</span> today.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });
  })

  suite('british-to-american translation', () => {
    // #11
    test('We watched the footie match for a while.', (done) => {
      const phrase = 'We watched the footie match for a while.';
      const locale = 'british-to-american';
      const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #12
    test('Paracetamol takes up to an hour to work.', (done) => {
      const phrase = 'Paracetamol takes up to an hour to work.';
      const locale = 'british-to-american';
      const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #13
    test('First, caramelise the onions.', (done) => {
      const phrase = 'First, caramelise the onions.';
      const locale = 'british-to-american';
      const expected = 'First, <span class="highlight">caramelize</span> the onions.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #14
    test('I spent the bank holiday at the funfair.', (done) => {
      const phrase = 'I spent the bank holiday at the funfair.';
      const locale = 'british-to-american';
      const expected = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #15
    test('I had a bicky then went to the chippy.', (done) => {
      const phrase = 'I had a bicky then went to the chippy.';
      const locale = 'british-to-american';
      const expected = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #16
    test('I\'ve just got bits and bobs in my bum bag.', (done) => {
      const phrase = 'I\'ve just got bits and bobs in my bum bag.';
      const locale = 'british-to-american';
      const expected = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    })

    // #17
    test('The car boot sale at Boxted Airfield was called off.', (done) => {
      const phrase = 'The car boot sale at Boxted Airfield was called off.';
      const locale = 'british-to-american';
      const expected = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    })

    // #18
    test('Have you met Mrs Kalyani?', (done) => {
      const phrase = 'Have you met Mrs Kalyani?';
      const locale = 'british-to-american';
      const expected = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    })

    // #19
    test('Prof Joyner of King\'s College, London', (done) => {
      const phrase = 'Prof Joyner of King\'s College, London';
      const locale = 'british-to-american';
      const expected = '<span class="highlight">Prof.</span> Joyner of King\'s College, London';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    })

    // #20
    test('Tea time is usually around 4 or 4.30.', (done) => {
      const phrase = 'Tea time is usually around 4 or 4.30.';
      const locale = 'british-to-american';
      const expected = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    })
  })

  suite('Highlight Translation', () => {
    // #21
    test('Mangoes are my favorite fruit.', (done) => {
      const phrase = 'Mangoes are my favorite fruit.';
      const locale = 'american-to-british';
      const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #22
    test('I ate yogurt for breakfast.', (done) => {
      const phrase = 'I ate yogurt for breakfast.';
      const locale = 'american-to-british';
      const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      const outPut = translator.translate(phrase, locale);  
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #23
    test('We watched the footie match for a while.', (done) => {
      const phrase = 'We watched the footie match for a while.';
      const locale = 'british-to-american';
      const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });

    // #24
    test('Paracetamol takes up to an hour to work.', (done) => {
      const phrase = 'Paracetamol takes up to an hour to work.';
      const locale = 'british-to-american';
      const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      const outPut = translator.translate(phrase, locale);
      console.log(outPut);
      assert.equal(outPut.translation, expected);
      done();
    });
  })
});
