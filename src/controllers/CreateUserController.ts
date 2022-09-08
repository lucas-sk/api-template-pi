import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { nome, email } = request.body;

    const user = await prismaClient.usuario.create({
      data: { nome: nome, email: email },
    });

    return response.json(user);
  }
}
