-- DropForeignKey
ALTER TABLE `cmt` DROP FOREIGN KEY `cmt_Img_id_fkey`;

-- DropForeignKey
ALTER TABLE `saveimage` DROP FOREIGN KEY `saveImage_image_id_fkey`;

-- AddForeignKey
ALTER TABLE `saveImage` ADD CONSTRAINT `saveImage_image_id_fkey` FOREIGN KEY (`image_id`) REFERENCES `img`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cmt` ADD CONSTRAINT `cmt_Img_id_fkey` FOREIGN KEY (`Img_id`) REFERENCES `img`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
