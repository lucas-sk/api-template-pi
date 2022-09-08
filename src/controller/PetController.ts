import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PetController{

  static createPet = async (request: Request, response: Response) => {
    try {
      const { nome, idade, sexo, raca, peso, cor, id_usuario} = request.body;
      const pet = await prisma.pet.create({
        data: {
          nome,
          idade,
          sexo,
          raca,
          peso,
          cor,
          id_usuario
        }
      });

      return response.json(pet);
    } catch (error) {

      return response.json(error);
    }


  }
}

