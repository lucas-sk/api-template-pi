import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';
import { checkInfoPet } from '../utils/checkInfoPet';

export class CreatePetController {
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const { name, years, gender, breed, weight, color } = request.body;

      if (checkInfoPet(name, years, gender, breed, weight, color))
        return response.status(StatusCodes.BAD_REQUEST).json({
          message: 'nenhuma das informações pode ser vazia ou igual 0',
        });

      if (gender !== 'masc' && gender !== 'fem')
        return response.status(StatusCodes.BAD_REQUEST).json({
          message: 'o gender só pode ser masc ou fem',
        });

      const pet = await prismaClient.pet.create({
        data: {
          name,
          years,
          gender,
          breed,
          weight,
          color,
          userId,
        },
      });

      return response.status(StatusCodes.CREATED).json({
        message: 'Pet adicionado com sucesso',
      });
    } catch (error) {
      return response.status(StatusCodes.BAD_GATEWAY).json(error);
    }
  }
}
