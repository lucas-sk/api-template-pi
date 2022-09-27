import { NextFunction, Request, Response } from 'express';
import JWT  from 'jsonwebtoken';
import config from '../config/auth';
import { promisify } from 'util';


export default async (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;

  if(!auth){
    return res.status(401).json({
      error: true,
      code: 130,
      message: "o token de autenticação não existe"
    });
  }

  const [, token] = auth.split(' ');

  try {
    const decoded = JWT.verify(token, config.secret);
    if(!decoded){
      return res.status(401).json({
        error: true,
        code: 130,
        message: "o token expirou!"
      });
    }
    console.log(decoded)
    next();
  } catch {
    return res.status(401).json({
      error: true,
      code: 130,
      message: "Token invalido!"
    });
  }


}

