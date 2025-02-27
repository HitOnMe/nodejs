/*
  Warnings:

  - You are about to drop the `user_role` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_role` DROP FOREIGN KEY `user_role_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `user_role` DROP FOREIGN KEY `user_role_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `user_role`;
