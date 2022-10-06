import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { prismaClient } from '../database/prismaClient';
import { checkCPF } from '../utils/checkCPF';
import { checkEmail } from '../utils/checkEmail';
import { StatusCodes } from 'http-status-codes';
import { Prisma } from '@prisma/client';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const data: Prisma.UserCreateInput = request.body;
    const hashedPassword = await bcrypt.hash(data.password, 10);

    if (checkCPF(data.cpf))
      return response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'cpf não é valido' });
    if (checkEmail(data.email))
      return response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'email não é valido' });

    try {
      const user = await prismaClient.user.create({
        data: {
          ...data,
          password: hashedPassword,
        },
      });

      return response.status(StatusCodes.CREATED).json(user);
    } catch (error) {
      return response.status(StatusCodes.BAD_GATEWAY).json({
        error,
      });
    }
  }
}
