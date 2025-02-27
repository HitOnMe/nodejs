/*
  Warnings:

  - You are about to drop the column `userInfo` on the `img` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `img` DROP COLUMN `userInfo`,
    ADD COLUMN `createdBy` JSON NOT NULL;
