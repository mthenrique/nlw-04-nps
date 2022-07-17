import { CreateUserController } from '@modules/user/useCases/createUser/CreateUserController';
import { Router } from 'express';

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', createUserController.handle);



export default userRoutes;