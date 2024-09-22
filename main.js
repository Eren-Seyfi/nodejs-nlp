const { NlpManager } = require("node-nlp");
const {
  saveNlpResult,
  saveUserInteraction,
  saveFeatureExtraction,
  getAllNlpResults,
  getResponseByIntent,
  getTrainingDataByLanguage,
} = require("./components/database");
const Preprocessor = require("./components/preprocessor");
const KeywordIntentRecognizer = require("./components/keywordIntentRecognizer");

(async () => {
  const manager = new NlpManager({ languages: ["en", "tr"] });

  const turkishTrainingData = await getTrainingDataByLanguage("tr");
  turkishTrainingData.forEach((data) => {
    manager.addDocument(data.language, data.text, data.intent);
  });

  await manager.train();

  const testSentence = "Bugün harika hissediyorum";
  const cleanedText = Preprocessor.cleanText(testSentence);
  const intentFromKeywords = await KeywordIntentRecognizer.recognize(
    cleanedText,
    "tr"
  );

  const startTime = Date.now();
  const nlpResult = await manager.process("tr", cleanedText);
  const processingTime = (Date.now() - startTime) / 1000;

  const response = await getResponseByIntent(nlpResult.intent, "tr");

  console.log("Temizlenmiş Cümle:", cleanedText);
  console.log("Anahtar Kelime ile Tanımlanan Intent:", intentFromKeywords);
  console.log("NLP Analizi Sonucu:", nlpResult);
  console.log("Veritabanından Gelen Yanıt:", response);

  const savedResult = await saveNlpResult(
    cleanedText,
    nlpResult.intent,
    nlpResult.score,
    "tr",
    response,
    nlpResult.sentiment?.score,
    nlpResult.entities,
    "web",
    "user123",
    processingTime
  );

  console.log("Veritabanına Kaydedilen Sonuç:", savedResult);

  await saveUserInteraction("user123", testSentence, response, "happy");

  if (nlpResult.entities.length > 0) {
    for (const entity of nlpResult.entities) {
      await saveFeatureExtraction(
        savedResult.id,
        entity.entity,
        entity.sourceText
      );
    }
  }

  const allResults = await getAllNlpResults();
  console.log("Tüm NLP Sonuçları:", allResults);
})();
