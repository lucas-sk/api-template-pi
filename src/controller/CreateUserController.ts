import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { prismaClient } from '../database/prismaClient';
import { checkCPF } from '../utils/checkCPF';
import { checkEmail } from '../utils/checkEmail';
import { checkNamePass } from '../utils/checkNamePass';
import { StatusCodes } from 'http-status-codes';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { nome, email, cpf, senha } = request.body;

      if (checkNamePass(nome, senha))
        return response
          .sendStatus(StatusCodes.BAD_REQUEST)
          .json({ message: 'nome e senha não pode ser vazio' });

      const hashedPassword = await bcrypt.hash(senha, 10);

      if (checkCPF(cpf)) {
        return response.json({ message: 'cpf não é valido' });
      }

      if (checkCPF(cpf))
        return response
          .sendStatus(StatusCodes.BAD_REQUEST)
          .json({ message: 'cpf não é valido' });

      if (checkEmail(email))
        return response
          .sendStatus(StatusCodes.BAD_REQUEST)
          .json({ message: 'email não é valido' });

      const user = await prismaClient.usuario.create({
        data: {
          nome,
          email,
          cpf,
          senha: hashedPassword,
        },
      });

      return response.sendStatus(StatusCodes.CREATED).json(user);
    } catch (error) {
      return response.sendStatus(StatusCodes.BAD_GATEWAY).json({
        message: 'verifique os dados',
      });
    }
  }
}
