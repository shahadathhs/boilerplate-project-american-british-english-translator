const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');
const britishToAmericanTitles = require('./british-toamerical-titles.js');

class Translator {
  constructor() {
    this.americanToBritishSpelling = americanToBritishSpelling;
    this.americanToBritishTitles = americanToBritishTitles;
    this.americanOnly = americanOnly;
    this.britishOnly = britishOnly;
    this.britishToAmericanTitles = britishToAmericanTitles;
  }

  // Translate a phrase based on the specified locale
  translate(phrase, locale) {
    if (!phrase || !locale) return { error: 'Required field(s) missing' };

    let translation = phrase;

    switch (locale) {
      case 'american-to-british':
        translation = this.translateText(translation, this.americanToBritishSpelling);
        translation = this.translateText(translation, this.americanToBritishTitles);
        translation = this.translateText(translation, this.americanOnly);
        translation = this.convertTimeFormat(translation, locale);
        break;

      case 'british-to-american':
        translation = this.translateText(translation, this.britishToAmericanTitles);
        translation = this.translateText(translation, this.britishOnly);
        translation = this.convertTimeFormat(translation, locale);
        break;

      default:
        return { error: 'Invalid value for locale field' };
    }

    return translation === phrase ? 'Everything looks good to me!' : { text: phrase, translation };
  }

  // Translate text based on the dictionary
  translateText(text, dictionary) {
    let translatedText = text;
    Object.keys(dictionary).forEach((key) => {
        const escapedKey = key.replace(/([.*+?^${}()|[\]\\])/g, '\\$1');
        const regex = new RegExp(`\\b${escapedKey}(?=[.,!?\\s]|$)`, 'gi');
        
        translatedText = translatedText.replace(regex, (match) => {
            const replacement = dictionary[key];

            // Preserve the case of the original match
            if (match.charAt(0) === match.charAt(0).toUpperCase()) {
                return `<span class="highlight">${replacement.charAt(0).toUpperCase()}${replacement.slice(1)}</span>`;
            } else {
                return `<span class="highlight">${replacement}</span>`;
            }
        });
    });
    return translatedText;
}

  // Convert time format based on locale
  convertTimeFormat(text, locale) {
    if (locale === 'american-to-british') {
      return text.replace(/(\d{1,2}):(\d{2})/g, `<span class="highlight">$1.$2</span>`);
    } else if (locale === 'british-to-american') {
      return text.replace(/(\d{1,2})\.(\d{2})/g, `<span class="highlight">$1:$2</span>`);
    }
    return text;
  }

  // List all supported translation types
  listSupportedLocales() {
    return ['american-to-british', 'british-to-american', 'american-to-british-title', 'american-to-british-spelling'];
  }
}

module.exports = Translator;