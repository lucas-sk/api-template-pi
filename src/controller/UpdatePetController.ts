import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';
import { checkInfoPet } from '../utils/checkInfoPet';
export class UpdatePetController {
    async handle (request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { nome, idade, sexo, raca, peso, cor } = request.body;

            if (checkInfoPet(nome, idade, sexo, raca, peso, cor))
            return response.sendStatus(StatusCodes.BAD_REQUEST).json({
                message: 'Nenhuma das informações pode ser vazia ou igual 0'
            });

            if (sexo !== 'masc' || sexo !== 'fem')
            return response.sendStatus(StatusCodes.BAD_REQUEST).json({
              message: 'O sexo só pode ser masc ou fem',
            });

            const pet = await prismaClient.pet.update({
              where: {
                    id
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

            return response.sendStatus(StatusCodes.OK).json({
                message: 'Pet adicionado com sucesso',
            });
        }   catch (error) {
            return response.sendStatus(StatusCodes.BAD_GATEWAY).json(error);
        }
    }
}