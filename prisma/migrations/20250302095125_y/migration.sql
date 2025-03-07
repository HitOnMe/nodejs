/*
  Warnings:

  - Added the required column `adress` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `certification` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile` ADD COLUMN `adress` VARCHAR(191) NOT NULL,
    ADD COLUMN `avatar` VARCHAR(191) NULL,
    ADD COLUMN `certification` JSON NOT NULL,
    ADD COLUMN `phone_number` INTEGER NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL;
