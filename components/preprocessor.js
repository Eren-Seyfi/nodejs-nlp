class Preprocessor {
  static cleanText(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
}

module.exports = Preprocessor;
