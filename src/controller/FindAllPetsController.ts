import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindAllPetsController {
  async handle(request: Request, response: Response) {
    try {
      const { id_usuario } = request.params;
      const pet = await prismaClient.pet.findMany({
        where: {
          id_usuario,
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
