-- AlterTable
ALTER TABLE `img` ADD COLUMN `description` VARCHAR(191) NOT NULL DEFAULT 'This is an image',
    ADD COLUMN `title` VARCHAR(191) NOT NULL DEFAULT 'Image',
    ADD COLUMN `userId` INTEGER NOT NULL DEFAULT 0,
    MODIFY `altext` VARCHAR(191) NULL DEFAULT 'Thanks for watching!';

-- AddForeignKey
ALTER TABLE `img` ADD CONSTRAINT `img_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
