import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';

export class CreatePetController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const petInfo: Prisma.PetUncheckedCreateInput = request.body;
    if (petInfo.gender !== 'masc' && petInfo.gender !== 'fem')
      return response.status(StatusCodes.BAD_REQUEST).json({
        message: 'o gender só pode ser masc ou fem',
      });

    try {
      const pet = await prismaClient.pet.create({
        data: {
          ...petInfo,
          userId,
        },
      });

      return response.status(StatusCodes.CREATED).json({
        message: pet,
      });
    } catch (error) {
      return response.status(StatusCodes.BAD_GATEWAY).json(error);
    }
  }
}
