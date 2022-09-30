import JWT from 'jsonwebtoken';
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import bcrypt from 'bcrypt';

import config from '../config/auth';
import { prismaClient } from '../database/prismaClient';
import { checkEmail } from '../utils/checkEmail';

export class signInUserController {
  async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      if (checkEmail(email)) {
        return response.json({ message: 'o email não é válido' });
      }

      const user = await prismaClient.user.findFirst({
        where: { email },
      });

      if (!user)
        return response
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: 'usúario não encontrado' });

      if (await bcrypt.compare(password, user.password)) {
        return response.status(StatusCodes.OK).json({
          message: 'Sucess',
          token: JWT.sign({ id: user.id }, config.secret, { expiresIn: config.expireIn }),
        });
      } else {
        return response
          .status(StatusCodes.NON_AUTHORITATIVE_INFORMATION)
          .json({ message: 'Invalid credentials' });
      }
    } catch {
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}
