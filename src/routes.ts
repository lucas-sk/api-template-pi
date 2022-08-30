import { Router } from 'express';
import { CreateUser } from './controllers/CreateUser';

const router = Router();
const createUser = new CreateUser();

router.post('/user', createUser.handle);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'hsadasddsadsa' });
});

export { router };
