/*
  Warnings:

  - Added the required column `domainId` to the `Edge` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Edge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flowIdSource" TEXT NOT NULL,
    "flowIdTarget" TEXT NOT NULL,
    "domainId" TEXT NOT NULL,
    CONSTRAINT "Edge_flowIdSource_fkey" FOREIGN KEY ("flowIdSource") REFERENCES "Flow" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Edge_flowIdTarget_fkey" FOREIGN KEY ("flowIdTarget") REFERENCES "Flow" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Edge_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "FlowDomain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Edge" ("flowIdSource", "flowIdTarget", "id") SELECT "flowIdSource", "flowIdTarget", "id" FROM "Edge";
DROP TABLE "Edge";
ALTER TABLE "new_Edge" RENAME TO "Edge";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
