import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';

export class FindAllUsersController {
  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const user = await prismaClient.user.findMany();
      if (user) {
        return response.status(StatusCodes.ACCEPTED).json(user);
      } else {
        return response.status(StatusCodes.BAD_REQUEST).json({
          message: 'Nenhum usuário cadastrado',
        });
      }
    } catch (error) {
      return response.status(StatusCodes.BAD_GATEWAY).json(error);
    }
  }
}
