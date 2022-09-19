import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    
    const { id } = request.params;
    const { nome, email, gender } = request.body;

    const user = await prismaClient.usuario.update({
      where: {
        id: Number (id)
      },
      data: { 
        nome, 
        email,
        gender  
      }
    });

    return response.json(user);
  }
}
