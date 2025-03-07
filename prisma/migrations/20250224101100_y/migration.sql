/*
  Warnings:

  - Added the required column `commentBy` to the `cmt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cmt` ADD COLUMN `commentBy` VARCHAR(191) NOT NULL;
