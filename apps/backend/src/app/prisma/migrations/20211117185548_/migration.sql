/*
  Warnings:

  - The values [SUPER_ADMIN,ADMIN,CUSTOMER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `department` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isSuperAdmin` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `BookPhoto` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[isRoot]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ar_comm_name]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[en_comm_name]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ROOT', 'UNIVERSITY', 'DEPARTMENT', 'STUDENT');
ALTER TABLE "users" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "BookPhoto" DROP CONSTRAINT "BookPhoto_book_id_fkey";

-- DropIndex
DROP INDEX "users_department_isSuperAdmin_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "department",
DROP COLUMN "isSuperAdmin",
ADD COLUMN     "ar_comm_name" TEXT,
ADD COLUMN     "departmentId" TEXT,
ADD COLUMN     "en_comm_name" TEXT,
ADD COLUMN     "isRoot" BOOLEAN,
ADD COLUMN     "universityId" TEXT;

-- DropTable
DROP TABLE "BookPhoto";

-- DropEnum
DROP TYPE "Department";

-- DropEnum
DROP TYPE "Universities";

-- CreateTable
CREATE TABLE "Attachment" (
    "id" TEXT NOT NULL,
    "lqPicture" TEXT NOT NULL,
    "mqPicture" TEXT NOT NULL,
    "hqPicture" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "taregetType" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_isRoot_key" ON "users"("isRoot");

-- CreateIndex
CREATE UNIQUE INDEX "users_ar_comm_name_key" ON "users"("ar_comm_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_en_comm_name_key" ON "users"("en_comm_name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
