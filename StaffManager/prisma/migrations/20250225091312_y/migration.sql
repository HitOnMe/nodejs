-- AddForeignKey
ALTER TABLE `saveImage` ADD CONSTRAINT `saveImage_image_id_fkey` FOREIGN KEY (`image_id`) REFERENCES `img`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
