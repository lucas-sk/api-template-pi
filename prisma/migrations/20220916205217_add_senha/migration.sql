/*
  Warnings:

  - Added the required column `senha` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "senha" TEXT NOT NULL;
