/*
  Warnings:

  - You are about to drop the column `commentBy` on the `cmt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cmt` DROP COLUMN `commentBy`;

-- AlterTable
ALTER TABLE `img` ADD COLUMN `commentBy` JSON NOT NULL;
