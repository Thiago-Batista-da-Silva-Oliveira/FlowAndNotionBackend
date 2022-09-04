import { Router } from 'express';
import { CreateUserController, FindUserController, SessionController } from 'modules/accounts/useCases';

export const userRoutes = Router();
const createUserController = new CreateUserController();
const sessionController = new SessionController();
const findUserController = new FindUserController();

userRoutes.post(
  '/register',
  createUserController.handle,
);

userRoutes.post(
  '/session',
  sessionController.handle,
);


userRoutes.get(
  '/findUser/:id',
  sessionController.handle,
);
