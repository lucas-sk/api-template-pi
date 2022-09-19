import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { checkInfo } from '../utils/checkInfoPet';

const prisma = new PrismaClient();

export class PetController {
  // cria novo pet
  static createPet = async (request: Request, response: Response) => {
    try {
      const { id_usuario } = request.params;
      const { nome, idade, sexo, raca, peso, cor } = request.body;

      if (checkInfo(nome, idade, sexo, raca, peso, cor)) {
        return response.json({
          message: 'nenhuma das informações pode ser vazia ou igual 0',
        });
      }

      if (sexo !== 'masc' || sexo !== 'fem') {
        return response.json({
          message: 'o sexo só pode ser masc ou fem',
        });
      }

      const pet = await prisma.pet.create({
        data: {
          nome,
          idade,
          sexo,
          raca,
          peso,
          cor,
          id_usuario,
        },
      });

      return response.json({
        message: 'Pet adicionado com sucesso',
      });
    } catch (error) {
      return response.json(error);
    }
  };

  // pega pet pelo Id do usuario
  static getPetByUserID = async (request: Request, response: Response) => {
    try {
      const { id_usuario } = request.params;
      const pet = await prisma.pet.findMany({
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
  };

  // pega pet baseado uuid do pet cadastrado no usuario
  static getPetOfUser = async (request: Request, response: Response) => {
    try {
      const { id, id_usuario } = request.params;
      const pet = await prisma.pet.findFirst({
        where: {
          id,
          id_usuario,
        },
      });

      return response.json(pet);
    } catch (error) {
      return response.json(error);
    }
  };
}
