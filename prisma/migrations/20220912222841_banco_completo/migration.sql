-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "id_endereco" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pet" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "sexo" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "cor" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "ponto_referencias" TEXT NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cpf_key" ON "usuario"("cpf");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
