/*
  Warnings:

  - Added the required column `gender` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "gender" "Gender" NOT NULL;
