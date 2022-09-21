import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import bcrypt from 'bcrypt';

import { prismaClient } from '../database/prismaClient';
import { checkEmail } from '../utils/checkEmail';

export class FindLogUserController {
  async handle(request: Request, response: Response) {
    try {
      const { email, senha } = request.body;

      if (checkEmail(email)) {
        return response.json({ message: 'o email não é válido' });
      }

      const user = await prismaClient.usuario.findFirst({
        where: { email },
      });

      if (!user)
        return response
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: 'usúario não encontrado' });

      if (await bcrypt.compare(senha, user.senha)) {
        return response.status(StatusCodes.OK).json({ message: 'Sucess' });
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
