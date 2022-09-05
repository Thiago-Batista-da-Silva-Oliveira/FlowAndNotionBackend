import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { ListEdgesService } from './ListEdgesService';

export class ListEdgeController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const {domainId} = req.params;
    const listEdgesService = container.resolve(ListEdgesService);
    const edges = await listEdgesService.execute({ domainId });
    return res.status(201).json({ message: 'success', payload: edges });
  }
}
