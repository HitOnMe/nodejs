/*
  Warnings:

  - You are about to drop the column `userId` on the `profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropIndex
DROP INDEX `Profile_userId_key` ON `profile`;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `userId`;
