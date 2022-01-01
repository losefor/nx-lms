/*
  Warnings:

  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "password",
ALTER COLUMN "first_name" DROP NOT NULL,
ALTER COLUMN "second_name" DROP NOT NULL,
ALTER COLUMN "username" DROP NOT NULL;
