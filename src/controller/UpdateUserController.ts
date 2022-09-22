import { Request, Response } from 'express';
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
        return response.json({ message: 'nome e senha não pode ser vazio' });
      }

      if (checkCPF(cpf)) {
        return response.json({ message: 'cpf não é valido' });
      }

      if (checkEmail(email)) {
        return response.json({ message: 'email não é valido' });
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
      return response.json(user);
    } catch (error) {
      return response.json({
        message: 'verifique os dados',
      });
    }
  }
}