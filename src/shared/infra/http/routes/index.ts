
import { Router } from 'express';
import { userRoutes } from '../../../../modules/accounts';


export const routes = Router();

routes.use('/users', userRoutes)
