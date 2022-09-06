-- CreateTable
CREATE TABLE "prontuario" (
    "id" TEXT NOT NULL,
    "id_prescricao" TEXT NOT NULL,
    "id_pet" TEXT NOT NULL,

    CONSTRAINT "prontuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prescricao" (
    "id" TEXT NOT NULL,
    "medicamento" TEXT NOT NULL,
    "id_medico" TEXT NOT NULL,

    CONSTRAINT "prescricao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medico" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "crm" TEXT NOT NULL,

    CONSTRAINT "medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacina" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_aplicacao" TIMESTAMP(3) NOT NULL,
    "substancia" TEXT NOT NULL,

    CONSTRAINT "vacina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacina_prontuario" (
    "id" TEXT NOT NULL,
    "id_prontuario" TEXT NOT NULL,
    "id_vacina" TEXT NOT NULL,

    CONSTRAINT "vacina_prontuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "prontuario" ADD CONSTRAINT "prontuario_id_prescricao_fkey" FOREIGN KEY ("id_prescricao") REFERENCES "prescricao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prontuario" ADD CONSTRAINT "prontuario_id_pet_fkey" FOREIGN KEY ("id_pet") REFERENCES "pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prescricao" ADD CONSTRAINT "prescricao_id_medico_fkey" FOREIGN KEY ("id_medico") REFERENCES "medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacina_prontuario" ADD CONSTRAINT "vacina_prontuario_id_prontuario_fkey" FOREIGN KEY ("id_prontuario") REFERENCES "prontuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacina_prontuario" ADD CONSTRAINT "vacina_prontuario_id_vacina_fkey" FOREIGN KEY ("id_vacina") REFERENCES "vacina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
