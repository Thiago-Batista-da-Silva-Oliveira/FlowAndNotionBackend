import { Router } from 'express';

import {
  CreateUserController,
} from '@modules/accounts/useCases';
import { SessionController } from '@modules/accounts/useCases/Session';


export const userRoutes = Router();
const createUserController = new CreateUserController();
const sessionController = new SessionController();

userRoutes.post(
  '/register',
  createUserController.handle,
);

userRoutes.post(
  '/session',
  sessionController.handle,
);
