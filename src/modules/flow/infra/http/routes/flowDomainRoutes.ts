import { Router } from 'express';
import { CreateEdgeController, CreateFlowDomainController, DeleteFlowController, DeleteFlowDomainController, ListEdgeController, ListFlowController, ListFlowDomainsController } from '../../../useCases';
import { CreateFlowController } from '../../../useCases/CreateFlow';
import { UpdateFlowController } from '../../../useCases/UpdateFlow';


export const flowRoutes = Router();

const createFlowDomainController = new CreateFlowDomainController();
const listFlowDomainsController = new ListFlowDomainsController()
const deleteFlowDomainController = new DeleteFlowDomainController()

const deleteFlowController = new DeleteFlowController()
const listFlowController = new ListFlowController()
const createFlowController = new CreateFlowController()
const updateFlowService = new UpdateFlowController()

const createEdgeController = new CreateEdgeController()
const listEdgeController = new ListEdgeController()

flowRoutes.post(
  '/createFlowDomain',
  createFlowDomainController.handle,
);

flowRoutes.get(
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

flowRoutes.get(
  '/listFlows/:domainId',
  listFlowController.handle,
);

flowRoutes.post(
  '/createFlow',
  createFlowController.handle,
);

flowRoutes.put(
  '/updateFlow/:id',
  updateFlowService.handle,
);

flowRoutes.post(
  '/createEdge/:domainId',
  createEdgeController.handle,
);

flowRoutes.get(
  '/listEdge/:domainId',
  listEdgeController.handle,
);