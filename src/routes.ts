import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();
const createUser = new CreateUserController();

router.post('/users', createUser.handle);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'hsadasddsadsa' });
});

export { router };
