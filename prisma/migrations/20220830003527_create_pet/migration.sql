/*
  Warnings:

  - You are about to alter the column `nome` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `email` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "usuario" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "pet" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "idade" INTEGER NOT NULL,
    "sexo" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "peso" DECIMAL(65,30) NOT NULL,
    "cor" TEXT NOT NULL,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);
