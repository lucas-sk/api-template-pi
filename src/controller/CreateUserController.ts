import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { prismaClient } from '../database/prismaClient';
import { checkCPF } from '../utils/checkCPF';
import { checkEmail } from '../utils/checkEmail';
import { checkNamePass } from '../utils/checkNamePass';
import { StatusCodes } from 'http-status-codes';
import { Prisma, PrismaClient } from '@prisma/client';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const data: Prisma.UserCreateInput = request.body;

      if (checkNamePass(data.name, data.password))
        return response
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: 'nome e senha não pode ser vazio' });

      const hashedPassword = await bcrypt.hash(data.password, 10);

      if (checkCPF(data.cpf))
        return response
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: 'cpf não é valido' });

      if (checkEmail(data.email))
        return response
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: 'email não é valido' });

      const user = await prismaClient.user.create({
        data: {
          ...data,
          password: hashedPassword,
        },
      });

      return response.status(StatusCodes.CREATED).json(user);
    } catch (error) {
      return response.status(StatusCodes.BAD_GATEWAY).json({
        message: 'verifique os dados',
      });
    }
  }
}
