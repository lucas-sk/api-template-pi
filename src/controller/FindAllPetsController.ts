import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindAllPetsController {
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const pet = await prismaClient.pet.findMany({
        where: {
          id_usuario: userId,
        },
      });

      if (pet) {
        return response.json(pet);
      } else {
        return response.json({
          message: 'Nenhum pet encontrado',
        });
      }
    } catch (error) {
      return response.json(error);
    }
  }
}
