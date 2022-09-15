/*
  Warnings:

  - You are about to drop the column `gender` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `id_endereco` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the `endereco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_id_endereco_fkey";

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "gender",
DROP COLUMN "id_endereco";

-- DropTable
DROP TABLE "endereco";

-- DropEnum
DROP TYPE "Gender";
