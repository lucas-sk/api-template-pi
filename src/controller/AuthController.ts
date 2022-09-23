import JWT from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import env from 'dotenv';
env.config();
const api_key = process.env.SECRETE_KEY;

export class AuthController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const user = request.body;
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader?.split(' ')[1];

    if (token == null) return response.status(401);

    JWT.verify(token, api_key, (error, user) => {
      if (error) return response.status(403);
      request.user = user;
      next();
    });
  }
}
