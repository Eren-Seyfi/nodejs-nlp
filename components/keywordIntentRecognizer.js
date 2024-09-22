const { getKeywordsByLanguage } = require('./database');

class KeywordIntentRecognizer {
  static async recognize(text, language) {
    const keywords = await getKeywordsByLanguage(language);
    for (const keyword of keywords) {
      if (text.includes(keyword.word)) {
        return keyword.intent;
      }
    }
    return null;
  }
}

module.exports = KeywordIntentRecognizer;
