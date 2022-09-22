import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';

export class FindPetController {
  async handle(request: Request, response: Response) {
    try {
      const { petId, userId } = request.params;
      const pet = await prismaClient.pet.findFirst({
        where: {
          id: petId,
          id_usuario: userId,
        },
      });

      return response.sendStatus(StatusCodes.ACCEPTED).json(pet);
    } catch (error) {
      return response.sendStatus(StatusCodes.BAD_GATEWAY).json(error);
    }
  }
}
