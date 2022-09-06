
import { Router } from 'express';
import { userRoutes } from '../../../../modules/accounts';
import { flowRoutes } from '../../../../modules/flow';
import { notionRoutes } from '../../../../modules/notion';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';


export const routes = Router();

routes.use('/users', userRoutes)
routes.use('/flows', ensureAuthenticated,  flowRoutes)
routes.use('/notions', ensureAuthenticated, notionRoutes )
