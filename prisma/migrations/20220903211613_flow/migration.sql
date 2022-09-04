-- CreateTable
CREATE TABLE "FlowDomain" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    CONSTRAINT "FlowDomain_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Flow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "domainId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT,
    "description" TEXT,
    CONSTRAINT "Flow_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "FlowDomain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
