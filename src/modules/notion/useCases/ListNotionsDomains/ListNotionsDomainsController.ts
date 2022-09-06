import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { ListNotionsDomainsService } from './ListNotionsDomainsService';

export class ListNotionsDomainsController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const {user: userId} = req;
    const listNotionsDomainsService = container.resolve(ListNotionsDomainsService);
    const domains = await listNotionsDomainsService.execute({ userId });
    return res.status(201).json({ message: 'success', payload: domains });
  }
}
