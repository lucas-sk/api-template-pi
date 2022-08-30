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
    "pronto_referencia" TEXT NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);
