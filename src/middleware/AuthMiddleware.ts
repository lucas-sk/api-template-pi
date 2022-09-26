import { NextFunction, Request, Response } from 'express';


export default{
  async (req: Request, res: Response, next: NextFunction){
    const auth = req.headers.authorization;

    if(!auth){
      return res.status(401).json({
        error: true,
        code: 130,
        message: "o token de autenticação não existe"
      });
    }

    console.log(auth);
  }
}
