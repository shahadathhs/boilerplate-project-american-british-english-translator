const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  constructor() {
    this.americanToBritishSpelling = americanToBritishSpelling;
    this.americanToBritishTitles = americanToBritishTitles;
    this.americanOnly = americanOnly;
    this.britishOnly = britishOnly;
  }

  // Translate a phrase based on the specified locale
  translate(phrase, locale) {
    if (!phrase || !locale) return { error: 'Required field(s) missing' };

    let translation;

    switch (locale) {
      case 'american-to-british':
        translation = this.translateText(phrase, this.americanToBritishSpelling);
        translation = this.translateText(translation, this.americanToBritishTitles);
        translation = this.translateText(translation, this.americanOnly);
        translation = this.convertTimeFormat(translation, locale);
        break;
      case 'british-to-american':
        translation = this.translateText(phrase, this.britishOnly);
        translation = this.convertTimeFormat(translation, locale);
        break;
      case 'american-to-british-title':
        translation = this.translateText(translation, this.americanToBritishTitles);
        break;
      default:
        return { error: 'Invalid value for locale field' };
    }

    return translation === phrase ? 'Everything looks good to me!' : { text: phrase, translation };
  }

  // Detect the locale of a phrase
  detect(phrase) {
    if (!phrase) return { error: 'No text to detect' };

    if (this.contains(phrase, this.americanToBritishSpelling)) {
      return 'american-to-british';
    } else if (this.contains(phrase, this.britishOnly)) {
      return 'british-to-american';
    } else if (this.contains(phrase, this.americanToBritishTitles)) {
      return 'american-to-british-title';
    } else if (this.contains(phrase, this.americanOnly)) {
      return 'american-to-british';
    }
    return 'Unable to detect';
  }

  // Check if the phrase contains any keys from the dictionary
  contains(phrase, dictionary) {
    return Object.keys(dictionary).some((key) => phrase.includes(key));
  }

  // Translate text based on the dictionary
  translateText(text, dictionary) {
    let translatedText = text;
    Object.keys(dictionary).forEach((key) => {
      const regex = new RegExp(`\\b${key}\\b`, 'gi');
      translatedText = translatedText.replace(regex, `<span class="highlight">${dictionary[key]}</span>`);
    });
    return translatedText;
  }

  // Convert time format based on locale
  convertTimeFormat(text, locale) {
    if (locale === 'american-to-british') {
      return text.replace(/(\d{1,2}):(\d{2})/g, `<span class="highlight">$1.$2</span>`);
    } else if (locale === 'british-to-american') {
      return text.replace(/(\d{1,2}\.\d{2})/g, `<span class="highlight">$1</span>`);
    }
    return text;
  }

  // List all supported translation types
  listSupportedLocales() {
    return ['american-to-british', 'british-to-american', 'american-to-british-title', 'american-to-british-spelling'];
  }
}

module.exports = Translator;