import { Request, Response, Router } from "express";

const router = Router();

router.get('/teste', (req: Request , res: Response) => {
  res.send('olá mundo');
})


export {router}
