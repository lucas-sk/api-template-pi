import { Router } from 'express';
import { CreatePetController } from './controller/CreatePetController';
import { CreateUserController } from './controller/CreateUserController';
import { FindAllPetsController } from './controller/FindAllPetsController';
import { FindAllUsersController } from './controller/FindAllUsersController';
import { FindLogUserController } from './controller/FindLogUserController';
import { FindPetController } from './controller/FindPetController';
import { FindUserController } from './controller/FindUserController';
import { UpdateUserController } from './controller/UpdateUserController';


import authMiddleware from './middleware/AuthMiddleware';

const router = Router();

const createUser = new CreateUserController();
const createPet = new CreatePetController();
const findUser = new FindUserController();
const findAllUsers = new FindAllUsersController();
const findPet = new FindPetController();
const findAllPets = new FindAllPetsController();
const updateUser = new UpdateUserController();
const findLogUser = new FindLogUserController();

// ROUTES USER
// cria usuário
router.post('/users', createUser.handle);
// routa de login de usuario
router.post('/users/login', findLogUser.handle);
// lita todos os usuarios
router.get('/users', authMiddleware,findAllUsers.handle);
// pega usuario pelo id
router.get('/users/:id', findUser.handle);
// atualiza usuário
router.put('/users/:id', updateUser.handle);
// ----------------------------------------------------------------
// ROUTES PET
// cria pet
router.post('/users/:userId/pets', createPet.handle);
// pega pet pelo ID do usuario
router.get('/users/:userId/pets', findAllPets.handle);
// pega pet baseado uuid do pet cadastrado no usuario
router.get('/users/:userId/pet/:petId', findPet.handle);
// ROUTE DEFAULT TESTE
router.get('/', (req, res) => {
  return res.json({
    message: 'falta apenas inic',
  });
});

router.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

export { router };
