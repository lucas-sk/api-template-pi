import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';

export class FindAllPetsController {
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const pet = await prismaClient.pet.findMany({
        where: {
          userId,
        },
      });

      if (pet) {
        return response.status(StatusCodes.ACCEPTED).json(pet);
      } else {
        return response.status(StatusCodes.BAD_REQUEST).json({
          message: 'Nenhum pet encontrado',
        });
      }
    } catch (error) {
      return response.status(StatusCodes.BAD_GATEWAY).json(error);
    }
  }
}
