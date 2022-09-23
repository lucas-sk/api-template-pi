import { Gender } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';
import { checkInfoPet } from '../utils/checkInfoPet';

export class CreatePetController {
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const { nome, idade, sexo, raca, peso, cor } = request.body;

      if (checkInfoPet(nome, idade, sexo, raca, peso, cor))
        return response.status(StatusCodes.BAD_REQUEST).json({
          message: 'nenhuma das informações pode ser vazia ou igual 0',
        });

      if (sexo !== 'masc' && sexo !== 'fem')
        return response.status(StatusCodes.BAD_REQUEST).json({
          message: 'o sexo só pode ser masc ou fem',
        });

      const pet = await prismaClient.pet.create({
        data: {
          nome,
          idade,
          sexo,
          raca,
          peso,
          cor,
          id_usuario: userId,
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
