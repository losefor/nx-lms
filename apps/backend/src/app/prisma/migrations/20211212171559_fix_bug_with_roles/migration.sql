-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "role" DROP NOT NULL,
ALTER COLUMN "university" DROP NOT NULL,
ALTER COLUMN "department" DROP NOT NULL,
ALTER COLUMN "department" SET DEFAULT E'',
ALTER COLUMN "student" DROP NOT NULL,
ALTER COLUMN "student" SET DEFAULT E'',
ALTER COLUMN "attachment" DROP NOT NULL,
ALTER COLUMN "attachment" SET DEFAULT E'',
ALTER COLUMN "book" DROP NOT NULL,
ALTER COLUMN "book" SET DEFAULT E'',
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "category" SET DEFAULT E'',
ALTER COLUMN "history" DROP NOT NULL,
ALTER COLUMN "history" SET DEFAULT E'',
ALTER COLUMN "favorite" DROP NOT NULL,
ALTER COLUMN "favorite" SET DEFAULT E'';
