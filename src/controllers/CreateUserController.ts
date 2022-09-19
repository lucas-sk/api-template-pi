import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { nome, email, gender} = request.body;

    const user = await prismaClient.usuario.create({
      data: { nome: nome, email: email, gender: gender },
    });

    return response.json(user);
  }
}
