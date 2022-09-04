
import { Router } from 'express';
import { userRoutes } from '../../../../modules/accounts';
import { flowRoutes } from '../../../../modules/flow';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';


export const routes = Router();

routes.use('/users', userRoutes)
routes.use('/flows', ensureAuthenticated,  flowRoutes)
