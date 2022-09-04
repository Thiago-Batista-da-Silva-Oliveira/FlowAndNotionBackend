import { userRoutes } from '@modules/accounts/infra/http';
import { Router } from 'express';

export const routes = Router();

routes.use('/users', userRoutes)
