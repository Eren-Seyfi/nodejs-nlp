/*
  Warnings:

  - You are about to drop the column `timestamp` on the `NlpResult` table. All the data in the column will be lost.

*/
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
    "processingTime" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_NlpResult" ("confidence", "createdAt", "entities", "id", "input", "intent", "language", "processingTime", "response", "sentiment", "source", "userId") SELECT "confidence", "createdAt", "entities", "id", "input", "intent", "language", "processingTime", "response", "sentiment", "source", "userId" FROM "NlpResult";
DROP TABLE "NlpResult";
ALTER TABLE "new_NlpResult" RENAME TO "NlpResult";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
