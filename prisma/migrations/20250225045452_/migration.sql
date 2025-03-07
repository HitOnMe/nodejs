/*
  Warnings:

  - A unique constraint covering the columns `[image_id]` on the table `saveImage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `saveImage_image_id_key` ON `saveImage`(`image_id`);
