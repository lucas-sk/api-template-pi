import { Router } from 'express';
import controller from './controller';

const router = Router();

// ROUTES USER

// cria usuário
router.post("/novo/usuario", (req, res) => {
  controller.usuario.createUser(req, res);
});

// lita todos os usuarios
router.get("/lista/usuarios", (req, res) => {
  controller.usuario.findAllUsers(req, res);
});

// pega usuario pelo id
router.get("/lista/usuario/:id", (req, res) => {
  controller.usuario.findUserByID(req, res);
});

// ----------------------------------------------------------------

// ROUTES ENDERECO

// cria novo endereco
router.post('/novo/endereco', (req, res) => {
  controller.endereco.novoEndereco(req, res)
});

// -----------------------------------------------------------------

// ROUTES PET

// cria pet
router.post("/user/:usuario_id/pets", (req, res) => {
    controller.pet.createPet(req, res);
});

// pega pet pelo ID do usuario
router.get("/user/:usuario_id/pets", (req, res) => {
  controller.pet.getPetByUserID(req, res);
});

// pega pet baseado uuid do pet cadastrado no usuario
router.get("/user/:usuario_id/pet/:pet_id", (req, res) => {
  controller.pet.getPetOfUser(req, res);
});

router.put("/edita/pet/:id", (req, res) => {
  controller.pet.updatePetByID(req, res);
});

// ROUTE DEFAULT TESTE
router.get("/", (req, res) => {
  return res.json({
    message: "falta apenas inic"
  });
});

export { router };


