import { Router } from 'express';
import {
  createPet,
  createUser,
  findAllPets,
  findAllUsers,
  findPet,
  findUser,
  signInUser,
  updatePet,
  updateUser,
} from './controller';

import AuthMiddleware from './middleware/AuthMiddleware';

const router = Router();

// ROUTES USER
// cria usuário
router.post('/users', createUser.handle);
// routa de login de usuario
router.post('/users/login', signInUser.handle);
// lita todos os usuarios
router.get('/users', findAllUsers.handle);
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
//atualiza o pet pelo ID
router.put('/pets/:id', updatePet.handle);
//-----------------------------------------------------------------
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
