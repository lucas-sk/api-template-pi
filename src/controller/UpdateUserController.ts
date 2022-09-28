import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prismaClient } from '../database/prismaClient';
import { checkCPF } from '../utils/checkCPF';
import { checkEmail } from '../utils/checkEmail';
import { checkNamePass } from '../utils/checkNamePass';

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    try{
      const { id } = request.params;
      const { nome, email, cpf, senha } = request.body;

      if (checkNamePass(nome, senha)) {
        return response.sendStatus(StatusCodes.BAD_REQUEST).json({
          message: 'Nome e senha não podem ser vazios'
        });
      }

      if (checkCPF(cpf)) {
        return response.sendStatus(StatusCodes.BAD_REQUEST).json({
          message: 'CPF não é valido'
        });
      }

      if (checkEmail(email)) {
        return response.sendStatus(StatusCodes.BAD_REQUEST).json({
          message: 'Email não é valido'
        });
      }

      const user = await prismaClient.usuario.update({
        where: {
          id
        },
        data: {
          nome,
          email,
          cpf,
          senha
      }
    });
      return response.sendStatus(StatusCodes.OK).json(user);
    } catch (error) {
      return response.sendStatus(StatusCodes.BAD_GATEWAY).json({
        message: 'verifique os dados',
      });
    }
  }
}
