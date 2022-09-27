import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';

export class FindAllUsersController {
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const user = await prismaClient.usuario.findMany();
      if (user) {
        return response.sendStatus(StatusCodes.ACCEPTED).json(user);
      } else {
        return response.sendStatus(StatusCodes.BAD_REQUEST).json({
          message: 'Nenhum usuário cadastrado',
        });
      }
    } catch (error) {
      return response.sendStatus(StatusCodes.BAD_GATEWAY).json(error);
    }
  }
}
