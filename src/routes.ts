import { Router } from 'express';
import controller from './controller';

const router = Router();

// ROUTES USER

// cria usuário
router.post('/users', (req, res) => {
  controller.usuario.createUser(req, res);
});

// lita todos os usuarios
router.get('/users', (req, res) => {
  controller.usuario.findAllUsers(req, res);
});

// pega usuario pelo id
router.get('/users/:id', (req, res) => {
  controller.usuario.findUserByID(req, res);
});

// ----------------------------------------------------------------

// ROUTES PET

// cria pet
router.post('/users/:id_usuario/pets', (req, res) => {
  controller.pet.createPet(req, res);
});

// pega pet pelo ID do usuario
router.get('/users/:usuario_id/pets', (req, res) => {
  controller.pet.getPetByUserID(req, res);
});

// pega pet baseado uuid do pet cadastrado no usuario
router.get('/users/:usuario_id/pet/:pet_id', (req, res) => {
  controller.pet.getPetOfUser(req, res);
});

router.put('/pet/:id', (req, res) => {
  controller.pet.updatePetByID(req, res);
});

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
