/*
  Warnings:

  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - Added the required column `roleId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "roleId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "arName" TEXT NOT NULL,
    "enName" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT E'',
    "university" TEXT NOT NULL DEFAULT E'',
    "department" TEXT NOT NULL DEFAULT E'r',
    "student" TEXT NOT NULL DEFAULT E'r',
    "attachment" TEXT NOT NULL DEFAULT E'c',
    "book" TEXT NOT NULL DEFAULT E'r',
    "category" TEXT NOT NULL DEFAULT E'r',
    "history" TEXT NOT NULL DEFAULT E'crud',
    "favorite" TEXT NOT NULL DEFAULT E'crud',
    "userId" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_arName_key" ON "Role"("arName");

-- CreateIndex
CREATE UNIQUE INDEX "Role_enName_key" ON "Role"("enName");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
