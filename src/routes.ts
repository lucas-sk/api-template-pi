import { Router } from 'express';
import { CreatePetController } from './controller/CreatePetController';
import { CreateUserController } from './controller/CreateUserController';
import { FindAllPetsController } from './controller/FindAllPetsController';
import { FindAllUsersController } from './controller/FindAllUsersController';

import { FindPetController } from './controller/FindPetController';
import { FindUserController } from './controller/FindUserController';

const router = Router();

const createUser = new CreateUserController();
const createPet = new CreatePetController();
const findUser = new FindUserController();
const findAllUsers = new FindAllUsersController();
const findPet = new FindPetController();
const findAllPets = new FindAllPetsController();

// ROUTES USER
// cria usuário
router.post('/users', createUser.handle);
// lita todos os usuarios
router.get('/users', findAllUsers.handle);
// pega usuario pelo id
router.get('/users/:id', findUser.handle);
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
