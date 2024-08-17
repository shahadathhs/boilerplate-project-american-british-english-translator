const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const { test } = require('mocha');
let translator;

suite('Functional Tests', () => {
  beforeEach(() => {
    translator = new Translator();
  });

  // #1
  test('Translation with text and locale fields', done => {
    chai
      .request(server)
      .post('/api/translate')
      .send({
        text: 'I ate yogurt for breakfast.',
        locale: 'american-to-british'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        console.log(res.body);
        assert.equal(res.body.text, 'I ate yogurt for breakfast.');
        assert.equal(res.body.translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        done();
      });
  });

  // #2
  test('Translation with text and invalid locale field', done => {
    chai
      .request(server)
      .post('/api/translate')
      .send({
        text: 'I hate cheese',
        locale: 'invalid'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        console.log(res.body);
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
  });

  // #3
  test('Translation with missing text field', done => {
    chai
      .request(server)
      .post('/api/translate')
      .send({
        locale: 'american-to-british'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        console.log(res.body);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  // #4
  test('Translation with missing locale field', done => {
    chai
      .request(server)
      .post('/api/translate')
      .send({
        text: 'I hate cheese'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        console.log(res.body);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  // #5
  test('Translation with empty text', done => {
    chai
      .request(server)
      .post('/api/translate')
      .send({
        text: '',
        locale: 'american-to-british'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        console.log(res.body);
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
  });

  // #6
  test('Translation with text that needs no translation', done => {
    chai
      .request(server)
      .post('/api/translate')
      .send({
        text: 'Hello',
        locale: 'american-to-british'
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        console.log(res.body);
        assert.deepEqual(res.body.translation, 'Everything looks good to me!');
        done();
      });
  });
});
