import { Router } from 'express';
import controller from './controller';

const router = Router();

// ROUTES USER

// cria usuário
router.post("/novo/usuario", (req, res) => {
  controller.usuario.createUser(req, res);
});

// ----------------------------------------------------------------

// ROUTES ENDERECO
router.post('/novo/endereco', (req, res) => {
  controller.endereco.novoEndereco(req, res)
});

// -----------------------------------------------------------------

// ROUTES PET

// cria pet
router.post("/novo/pet", (req, res) => {
    controller.pet.createPet(req, res);
});


// ROUTE DEFAULT TESTE
router.get("/", (req, res) => {
  console.log("tessteee");
});

export { router };


