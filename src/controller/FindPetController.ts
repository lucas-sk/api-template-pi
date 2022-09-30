import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';

export class FindPetController {
  async handle(request: Request, response: Response) {
    try {
      const { id, userId } = request.params;
      const pet = await prismaClient.pet.findFirst({
        where: {
          id,
          userId,
        },
      });

      return response.status(StatusCodes.ACCEPTED).json(pet);
    } catch (error) {
      return response.status(StatusCodes.BAD_GATEWAY).json(error);
    }
  }
}
