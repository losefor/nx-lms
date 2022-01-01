/*
  Warnings:

  - A unique constraint covering the columns `[department,isSuperAdmin]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `department` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Department" AS ENUM ('CS', 'ME', 'CE', 'EE');

-- CreateEnum
CREATE TYPE "Universities" AS ENUM ('UOT');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "department" "Department" NOT NULL,
ADD COLUMN     "isSuperAdmin" BOOLEAN;

-- CreateIndex
CREATE UNIQUE INDEX "users_department_isSuperAdmin_key" ON "users"("department", "isSuperAdmin");
