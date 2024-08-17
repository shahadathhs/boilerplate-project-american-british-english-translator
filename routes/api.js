'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;

      if (text === '') return res.json({ error: 'No text to translate' });

      if (!text || !locale) return res.json({ error: 'Required field(s) missing' });
      
      if (text === '') return res.json({ error: 'No text to translate' });

      if (!translator.listSupportedLocales().includes(locale)) 
        return res.json({ error: 'Invalid value for locale field' });

      const result = translator.translate(text, locale);

      if (result === 'Everything looks good to me!') {
        return res.json({ text: text, translation: 'Everything looks good to me!' });
      }

      return res.json(result);
    });
};
