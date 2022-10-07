import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';

export class UpdatePetController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const data: Prisma.PetUpdateManyMutationInput = request.body;
    if (data.gender !== 'masc' || data.gender !== 'fem')
      return response.status(StatusCodes.BAD_REQUEST).json({
        message: 'O gender só pode ser masc ou fem',
      });

    try {
      const pet = await prismaClient.pet.update({
        where: {
          id,
        },
        data: {
          ...data,
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
