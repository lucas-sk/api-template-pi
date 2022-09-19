import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { checkNamePass } from '../utils/checkNamePass';
import { checkEmail } from '../utils/checkEmail';
import { checkCPF } from '../utils/checkCPF';

const prisma = new PrismaClient();

export class UserController {
  // cria novo usuario
  static createUser = async (request: Request, response: Response) => {
    try {
      const { nome, email, cpf, senha } = request.body;

      if (checkNamePass(nome, senha)) {
        return response.json({ message: 'nome e senha não pode ser vazio' });
      }

      if (checkCPF(cpf)) {
        return response.json({ message: 'cpf não é valido' });
      }

      if (checkEmail(email)) {
        return response.json({ message: 'email não é valido' });
      }

      const user = await prisma.usuario.create({
        data: {
          nome,
          email,
          cpf,
          senha,
        },
      });

      return response.json(user);
    } catch (error) {
      return response.json({
        message: 'verifique os dados',
      });
    }
  };

  // lista todos os usuarios
  static findAllUsers = async (request: Request, response: Response) => {
    try {
      const user = await prisma.usuario.findMany();
      if (user) {
        return response.json(user);
      } else {
        return response.json({
          message: 'Nenhum usuário cadastrado',
        });
      }
    } catch (error) {
      return response.json(error);
    }
  };

  // PEGA USUARIO POR ID
  static findUserByID = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const user = await prisma.usuario.findFirst({
        where: {
          id,
        },
      });

      if (user) {
        return response.json(user);
      } else {
        return response.json({
          message: 'Usuário não existe',
        });
      }
    } catch (error) {
      return response.json(error);
    }
  };
}
