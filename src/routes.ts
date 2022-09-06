import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { UserController } from './controller/UserController';
import { EnderecoController } from './controller/EnderecoController';

const router = Router();
const prisma = new PrismaClient();

const usuario = new UserController();
const endereco = new EnderecoController();

router.post("/novo/usuario", usuario.createUser);
router.post("/novo/endereco", endereco.newEndereco);



router.get('/users', (req, res) => {
  res.status(200).json({ message: 'mdpmddpkmpkdmfdkpm' });
});

export { router };
