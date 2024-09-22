const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function saveNlpResult(
  inputText,
  intent,
  confidence,
  language,
  response,
  sentiment = null,
  entities = null,
  source = null,
  userId = null,
  processingTime = null
) {
  const existingResult = await prisma.nlpResult.findFirst({
    where: {
      input: inputText,
      intent: intent,
      confidence: confidence,
      language: language,
      response: response,
      sentiment: sentiment,
      entities: entities ? JSON.stringify(entities) : null,
      source: source,
      userId: userId,
      processingTime: processingTime,
    },
  });

  if (existingResult) {
    console.log(
      "Bu veri zaten veritabanında mevcut, tekrar kaydedilmeyecek:",
      existingResult
    );
    return existingResult;
  }

  const savedResult = await prisma.nlpResult.create({
    data: {
      input: inputText,
      intent: intent,
      confidence: confidence,
      language: language,
      response: response,
      sentiment: sentiment,
      entities: entities ? JSON.stringify(entities) : null,
      source: source,
      userId: userId,
      processingTime: processingTime,
    },
  });

  return savedResult;
}

async function saveUserInteraction(
  userId,
  inputText,
  outputText,
  userSentiment = null
) {
  const savedInteraction = await prisma.userInteraction.create({
    data: {
      userId: userId,
      inputText: inputText,
      outputText: outputText,
      userSentiment: userSentiment,
    },
  });

  return savedInteraction;
}

async function saveFeatureExtraction(resultId, feature, value) {
  const savedFeature = await prisma.featureExtraction.create({
    data: {
      resultId: resultId,
      feature: feature,
      value: value,
    },
  });

  return savedFeature;
}

async function getAllNlpResults() {
  const allResults = await prisma.nlpResult.findMany();
  return allResults.map((result) => ({
    ...result,
    entities: result.entities ? JSON.parse(result.entities) : null,
  }));
}

async function getTrainingDataByLanguage(language) {
  return prisma.trainingData.findMany({
    where: { language },
  });
}

async function getKeywordsByLanguage(language) {
  return prisma.keyword.findMany({
    where: { language },
  });
}

async function getResponseByIntent(intent, language) {
  const response = await prisma.response.findFirst({
    where: {
      intent: intent,
      language: language,
    },
  });
  return response ? response.text : null;
}

module.exports = {
  saveNlpResult,
  saveUserInteraction,
  saveFeatureExtraction,
  getAllNlpResults,
  getTrainingDataByLanguage,
  getKeywordsByLanguage,
  getResponseByIntent,
};
