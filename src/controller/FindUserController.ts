import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindUserController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const user = await prismaClient.usuario.findFirst({
        where: {
          id,
        },
      });

      if (user) {
        return response.json(user);
      } else {
        return response.json({
          message: 'Usuário não existe',
        });
      }
    } catch (error) {
      return response.json(error);
    }
  }
}
