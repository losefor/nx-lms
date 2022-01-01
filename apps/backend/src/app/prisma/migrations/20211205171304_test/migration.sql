-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_category_id_fkey";

-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_user_id_fkey";

-- AlterTable
ALTER TABLE "books" ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "category_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
