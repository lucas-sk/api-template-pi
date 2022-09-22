import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
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
        return response.sendStatus(StatusCodes.ACCEPTED).json(user);
      } else {
        return response.sendStatus(StatusCodes.BAD_REQUEST).json({
          message: 'Usuário não existe',
        });
      }
    } catch (error) {
      return response.sendStatus(StatusCodes.BAD_GATEWAY).json(error);
    }
  }
}
