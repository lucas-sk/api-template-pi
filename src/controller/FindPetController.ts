import { Request, Response } from 'express';
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

      return response.json(pet);
    } catch (error) {
      return response.json(error);
    }
  }
}
