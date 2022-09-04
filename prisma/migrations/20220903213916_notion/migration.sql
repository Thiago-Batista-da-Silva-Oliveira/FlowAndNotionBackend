-- CreateTable
CREATE TABLE "NotionDomain" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "color" TEXT,
    "backgroundColor" TEXT,
    CONSTRAINT "NotionDomain_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "domainId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT,
    CONSTRAINT "Notion_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "NotionDomain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
