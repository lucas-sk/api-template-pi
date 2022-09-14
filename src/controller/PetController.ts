import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PetController{

  // cria novo pet
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

      return response.json({
        message: "Pet adicionado com sucesso"
      });

    } catch (error) {

      return response.json(error);
    }
  }

  // pega pet pelo Id do usuario
  static getPetByUserID = async (request: Request, response: Response) => {
    try {
      const { id_usuario } = request.params;
      const pet = await prisma.pet.findMany({
        where: {
          id_usuario,
        }
      });

      if(pet){
        return response.json(pet);
      }else{
        return response.json({
          "message" : "Nenhum pet encontrado"
        });
      }

    } catch (error) {

      return response.json(error);
    }
  }

  // pega pet baseado uuid do pet cadastrado no usuario
  static getPetOfUser = async (request: Request, response: Response) => {
    try {
      const { id, id_usuario } = request.params;
      const pet = await prisma.pet.findFirst({
        where:{
          id,
          id_usuario
        }
      });

      return response.json(pet);
    } catch (error) {
      return response.json(error);

    }
  }

  // edita pet pelo ID
  static updatePetByID = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { nome, idade, sexo, raca, peso, cor } = request.body;
      const pet = await prisma.pet.update({
        where: {
          id,
        },
        data: {
          nome,
          idade,
          sexo,
          raca,
          peso,
          cor,
        }
      });

      if(pet){
        return response.json(pet);
      }else{
        return response.json({
          "message" : "Nenhum pet encontrado"
        });
      }

    } catch (error) {

      return response.json(error);
    }
  }
}

