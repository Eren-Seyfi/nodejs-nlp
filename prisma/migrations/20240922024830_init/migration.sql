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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sentiment" REAL,
    "entities" TEXT,
    "source" TEXT
);
INSERT INTO "new_NlpResult" ("confidence", "createdAt", "entities", "id", "input", "intent", "language", "response", "sentiment", "source") SELECT "confidence", "createdAt", "entities", "id", "input", "intent", "language", "response", "sentiment", "source" FROM "NlpResult";
DROP TABLE "NlpResult";
ALTER TABLE "new_NlpResult" RENAME TO "NlpResult";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
