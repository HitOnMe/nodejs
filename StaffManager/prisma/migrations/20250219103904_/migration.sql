-- DropForeignKey
ALTER TABLE `img` DROP FOREIGN KEY `img_userId_fkey`;

-- DropIndex
DROP INDEX `img_userId_fkey` ON `img`;

-- AlterTable
ALTER TABLE `img` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `img` ADD CONSTRAINT `img_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
