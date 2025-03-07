/*
  Warnings:

  - Added the required column `Img_id` to the `cmt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cmt` ADD COLUMN `Img_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `cmt` ADD CONSTRAINT `cmt_Img_id_fkey` FOREIGN KEY (`Img_id`) REFERENCES `img`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
