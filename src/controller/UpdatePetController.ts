import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';
export class UpdatePetController {
    async handle (request: Request, response: Response) {
        try {
            const { petId } = request.params;
            const { nome, idade, sexo, raca, peso, cor } = request.body;

            if(sexo){
              if (sexo !== 'masc' || sexo !== 'fem')
              return response.status(StatusCodes.BAD_REQUEST).json({
                message: 'O sexo só pode ser masc ou fem',
              });
            }

            const pet = await prismaClient.pet.update({
              where: {
                    id : petId
                },
              data: {
                  nome,
                  idade,
                  sexo,
                  raca,
                  peso,
                  cor
                },
            });

            return response.status(StatusCodes.OK).json({
                message: 'Pet adicionado com sucesso',
            });
        }   catch (error) {
            return response.status(StatusCodes.BAD_GATEWAY).json(error);
        }
    }
}
