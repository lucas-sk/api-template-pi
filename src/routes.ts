import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { UserController } from './controller/UserController';

const prisma = new PrismaClient();
const find = new UserController();
const router = Router();


router.get("/user/:id", find.handle);

router.post('/user', async (req: Request , res: Response) => {
  const { nome, email } = req.body;

  const user = await prisma.usuario.create({
    data: {
      nome,
      email,
    }
  });

  return res.json(user);
});


router.get('/users', (req, res) => {
  res.status(200).json({ message: 'mdpmddpkmpkdmfdkpm' });
});

export { router };
