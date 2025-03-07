/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `cmt` DROP FOREIGN KEY `cmt_userId_fkey`;

-- DropForeignKey
ALTER TABLE `img` DROP FOREIGN KEY `img_userId_fkey`;

-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_userId_fkey`;

-- DropForeignKey
ALTER TABLE `saveimage` DROP FOREIGN KEY `saveImage_user_id_fkey`;

-- DropIndex
DROP INDEX `saveImage_user_id_fkey` ON `saveimage`;

-- AlterTable
ALTER TABLE `profile` ADD COLUMN `userId` INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX `profile_userId_key` ON `profile`(`userId`);

-- AddForeignKey
ALTER TABLE `img` ADD CONSTRAINT `img_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `saveImage` ADD CONSTRAINT `saveImage_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cmt` ADD CONSTRAINT `cmt_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
