import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserController{
  async handle(request: Request, response: Response) {
    const { nome } = request.params;

    const user = await prisma.usuario.findFirst({
      where: {
        nome,
      }
    });
    return response.json(user);
  }
}

