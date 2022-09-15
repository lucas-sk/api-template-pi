/*
  Warnings:

  - Changed the type of `sexo` on the `pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('masc', 'fem', 'undefined');

-- AlterTable
ALTER TABLE "pet" DROP COLUMN "sexo",
ADD COLUMN     "sexo" "Gender" NOT NULL;
