import { Router } from 'express';
import {  CreateNotionDomainController, DeleteNotionController, DeleteNotionDomainController, ListNotionsController, ListNotionsDomainsController } from '../../../useCases';
import { CreateNotionController } from '../../../useCases/CreateNotion';


export const notionRoutes = Router();

const createNotionController = new CreateNotionController()
const createNotionDomainController = new CreateNotionDomainController()
const listNotionsController = new ListNotionsController()
const listNotionsDomainsController = new ListNotionsDomainsController()
const deleteNotionController = new DeleteNotionController()
const deleteNotionDomainController = new DeleteNotionDomainController()

notionRoutes.post(
  '/createNotionDomain',
  createNotionDomainController.handle,
);

notionRoutes.get(
  '/listNotionsDomains',
  listNotionsDomainsController.handle,
);

notionRoutes.delete(
  '/deleteDomain/:id',
  deleteNotionDomainController.handle,
);

notionRoutes.post(
  '/createNotion/:domainId',
  createNotionController.handle,
);

notionRoutes.get(
  '/listNotions/:domainId',
  listNotionsController.handle,
);

notionRoutes.delete(
  '/deleteNotion/:id',
  deleteNotionController.handle,
);