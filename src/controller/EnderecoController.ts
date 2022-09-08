import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class EnderecoController{

   static novoEndereco = async (request: Request, response: Response) => {
    try {

      const { uf, cidade, logradouro, numero, bairro, cep, complemento, ponto_referencias } = request.body;

      const endereco = await prisma.endereco.create({
        data: {
          uf,
          cidade,
          logradouro,
          numero,
          bairro,
          cep,
          complemento,
          ponto_referencias
        }
      });
      return response.json(endereco);
    } catch (error) {
      return response.json(error)
    }
  }

}

