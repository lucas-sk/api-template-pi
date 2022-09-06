import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserController{
  async createUser(request: Request, response: Response) {
    const { nome, email, cpf, id_endereco } = request.body;

    const user = await prisma.usuario.create({
      data: {
        nome,
        email,
        cpf,
        id_endereco
      }
    });
    return response.json(user);
  }
}

