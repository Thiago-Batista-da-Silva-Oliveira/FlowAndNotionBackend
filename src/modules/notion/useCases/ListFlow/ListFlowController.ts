import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { ListFlowService } from './ListFlowService';

export class ListFlowController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const {domainId} = req.params;
    const listFlowService = container.resolve(ListFlowService);
    const domains = await listFlowService.execute({ domainId });
    return res.status(201).json({ message: 'success', payload: domains });
  }
}
