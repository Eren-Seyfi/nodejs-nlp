-- AlterTable
ALTER TABLE "TrainingData" ADD COLUMN "source" TEXT;

-- CreateTable
CREATE TABLE "UserInteraction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "inputText" TEXT NOT NULL,
    "outputText" TEXT NOT NULL,
    "userSentiment" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "FeatureExtraction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "resultId" INTEGER NOT NULL,
    "feature" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FeatureExtraction_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "NlpResult" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NlpResult" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "input" TEXT NOT NULL,
    "intent" TEXT NOT NULL,
    "confidence" REAL NOT NULL,
    "language" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "sentiment" REAL,
    "entities" TEXT,
    "source" TEXT,
    "userId" TEXT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processingTime" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_NlpResult" ("confidence", "createdAt", "entities", "id", "input", "intent", "language", "response", "sentiment", "source") SELECT "confidence", "createdAt", "entities", "id", "input", "intent", "language", "response", "sentiment", "source" FROM "NlpResult";
DROP TABLE "NlpResult";
ALTER TABLE "new_NlpResult" RENAME TO "NlpResult";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
