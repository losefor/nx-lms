/*
  Warnings:

  - You are about to drop the column `first_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `second_name` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[arName,enName,userId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uot_url]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Role_arName_key";

-- DropIndex
DROP INDEX "Role_enName_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "first_name",
DROP COLUMN "second_name",
ADD COLUMN     "ar_name" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "en_name" TEXT,
ADD COLUMN     "uot_url" TEXT,
ALTER COLUMN "phone_number" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Role_arName_enName_userId_key" ON "Role"("arName", "enName", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_uot_url_key" ON "users"("uot_url");
