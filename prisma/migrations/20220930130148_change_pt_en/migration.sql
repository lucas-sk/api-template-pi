/*
  Warnings:

  - You are about to drop the `medico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `prescricao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `prontuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vacina` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vacina_prontuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pet" DROP CONSTRAINT "pet_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "prescricao" DROP CONSTRAINT "prescricao_id_medico_fkey";

-- DropForeignKey
ALTER TABLE "prontuario" DROP CONSTRAINT "prontuario_id_pet_fkey";

-- DropForeignKey
ALTER TABLE "prontuario" DROP CONSTRAINT "prontuario_id_prescricao_fkey";

-- DropForeignKey
ALTER TABLE "vacina_prontuario" DROP CONSTRAINT "vacina_prontuario_id_prontuario_fkey";

-- DropForeignKey
ALTER TABLE "vacina_prontuario" DROP CONSTRAINT "vacina_prontuario_id_vacina_fkey";

-- DropTable
DROP TABLE "medico";

-- DropTable
DROP TABLE "pet";

-- DropTable
DROP TABLE "prescricao";

-- DropTable
DROP TABLE "prontuario";

-- DropTable
DROP TABLE "usuario";

-- DropTable
DROP TABLE "vacina";

-- DropTable
DROP TABLE "vacina_prontuario";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "years" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vetRecords" (
    "id" TEXT NOT NULL,
    "prescriptionId" TEXT NOT NULL,
    "petId" TEXT NOT NULL,

    CONSTRAINT "vetRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prescriptions" (
    "id" TEXT NOT NULL,
    "medicamento" TEXT NOT NULL,
    "vetId" TEXT NOT NULL,

    CONSTRAINT "prescriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "crm" TEXT NOT NULL,

    CONSTRAINT "vets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vaccines" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "data_aplicacao" TIMESTAMP(3) NOT NULL,
    "substancia" TEXT NOT NULL,

    CONSTRAINT "vaccines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vaccineVetRecords" (
    "id" TEXT NOT NULL,
    "vetRecordId" TEXT NOT NULL,
    "vaccineId" TEXT NOT NULL,

    CONSTRAINT "vaccineVetRecords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vetRecords" ADD CONSTRAINT "vetRecords_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vetRecords" ADD CONSTRAINT "vetRecords_prescriptionId_fkey" FOREIGN KEY ("prescriptionId") REFERENCES "prescriptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescriptions" ADD CONSTRAINT "prescriptions_vetId_fkey" FOREIGN KEY ("vetId") REFERENCES "vets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vaccineVetRecords" ADD CONSTRAINT "vaccineVetRecords_vetRecordId_fkey" FOREIGN KEY ("vetRecordId") REFERENCES "vetRecords"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vaccineVetRecords" ADD CONSTRAINT "vaccineVetRecords_vaccineId_fkey" FOREIGN KEY ("vaccineId") REFERENCES "vaccines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
