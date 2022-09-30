import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';

export class UpdatePetController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, years, gender, breed, weight, color } = request.body;

      if (gender) {
        if (gender !== 'masc' || gender !== 'fem')
          return response.status(StatusCodes.BAD_REQUEST).json({
            message: 'O gender só pode ser masc ou fem',
          });
      }

      const pet = await prismaClient.pet.update({
        where: {
          id,
        },
        data: {
          name,
          years,
          gender,
          breed,
          weight,
          color,
        },
      });

      return response.status(StatusCodes.OK).json({
        message: 'Pet adicionado com sucesso',
      });
    } catch (error) {
      return response.status(StatusCodes.BAD_GATEWAY).json(error);
    }
  }
}
