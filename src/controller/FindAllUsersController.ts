import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindAllUsersController {
  async handle(request: Request, response: Response) {
    try {
      const user = await prismaClient.usuario.findMany();
      if (user) {
        return response.json(user);
      } else {
        return response.json({
          message: 'Nenhum usuário cadastrado',
        });
      }
    } catch (error) {
      return response.json(error);
    }
  }
}
