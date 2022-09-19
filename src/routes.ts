import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

const router = Router();
const createUser = new CreateUserController();
const updateUser = new UpdateUserController();

router.post('/users', createUser.handle);
router.put('/users/:id', updateUser.handle);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'hsadasddsadsa' });
});

export { router };
