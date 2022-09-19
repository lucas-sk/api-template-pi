import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindPetController {
  async handle(request: Request, response: Response) {
    try {
      const { id, id_usuario } = request.params;
      const pet = await prismaClient.pet.findFirst({
        where: {
          id,
          id_usuario,
        },
      });

      return response.json(pet);
    } catch (error) {
      return response.json(error);
    }
  }
}
