import { CreatePetController } from './CreatePetController';
import { CreateUserController } from './CreateUserController';
import { FindAllPetsController } from './FindAllPetsController';
import { FindAllUsersController } from './FindAllUsersController';
import { FindPetController } from './FindPetController';
import { FindUserController } from './FindUserController';
import { signInUserController } from './signInUserController';
import { UpdatePetController } from './UpdatePetController';
import { UpdateUserController } from './UpdateUserController';

const signInUser = new signInUserController();
const createUser = new CreateUserController();
const createPet = new CreatePetController();
const findUser = new FindUserController();
const findAllUsers = new FindAllUsersController();
const findPet = new FindPetController();
const findAllPets = new FindAllPetsController();
const updateUser = new UpdateUserController();
const updatePet = new UpdatePetController();

export {
  signInUser,
  createUser,
  createPet,
  findUser,
  findAllUsers,
  findPet,
  findAllPets,
  updateUser,
  updatePet,
};
