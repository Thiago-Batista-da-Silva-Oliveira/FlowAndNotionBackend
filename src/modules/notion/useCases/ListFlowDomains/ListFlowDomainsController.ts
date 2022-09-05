import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { ListFlowDomainsService } from './ListFlowDomainsService';

export class ListFlowDomainsController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const {user: userId} = req;
    const listFlowDomainsService = container.resolve(ListFlowDomainsService);
    const domains = await listFlowDomainsService.execute({ userId });
    return res.status(201).json({ message: 'success', payload: domains });
  }
}
