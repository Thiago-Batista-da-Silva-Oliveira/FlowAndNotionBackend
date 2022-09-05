import { Router } from 'express';
import { CreateFlowDomainController, DeleteFlowController, DeleteFlowDomainController, ListFlowController, ListFlowDomainsController } from '../../../useCases';
import { CreateFlowController } from '../../../useCases/CreateFlow';


export const flowRoutes = Router();

const createFlowDomainController = new CreateFlowDomainController();
const listFlowDomainsController = new ListFlowDomainsController()
const deleteFlowDomainController = new DeleteFlowDomainController()
const deleteFlowController = new DeleteFlowController()
const listFlowController = new ListFlowController()

const createFlowController = new CreateFlowController()

flowRoutes.post(
  '/createFlowDomain',
  createFlowDomainController.handle,
);

flowRoutes.post(
  '/listFlowDomains',
  listFlowDomainsController.handle,
);

flowRoutes.delete(
  '/deleteDomain/:id',
  deleteFlowDomainController.handle,
);

flowRoutes.delete(
  '/delete/:id',
  deleteFlowController.handle,
);

flowRoutes.delete(
  '/listFlows/:domainId',
  listFlowController.handle,
);

flowRoutes.post(
  '/createFlow',
  createFlowController.handle,
);