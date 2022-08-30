import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient';

export class CreateUser{
  async handle(request: Request, response: Response) {

    const { nome, email, cpf } = request.body;

    const user = await prismaClient.usuario.create({
      data: {
        nome,
        email,
        cpf
      },
    });

    return response.json(user);

  }
}

