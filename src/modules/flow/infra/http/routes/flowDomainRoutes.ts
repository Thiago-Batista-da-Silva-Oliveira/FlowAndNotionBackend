import { Router } from 'express';
import { CreateFlowDomainController, DeleteFlowDomainController, ListFlowDomainsController } from '../../../useCases';


export const flowRoutes = Router();

const createFlowDomainController = new CreateFlowDomainController();
const listFlowDomainsController = new ListFlowDomainsController()
const deleteFlowDomainController = new DeleteFlowDomainController()

flowRoutes.post(
  '/createFlowDomain',
  createFlowDomainController.handle,
);

flowRoutes.post(
  '/listFlowDomains',
  listFlowDomainsController.handle,
);

flowRoutes.post(
  '/deleteDomain/:id',
  deleteFlowDomainController.handle,
);