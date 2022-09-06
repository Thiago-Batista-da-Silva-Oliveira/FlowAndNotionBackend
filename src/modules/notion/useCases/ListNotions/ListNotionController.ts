import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { ListNotionsService } from './ListNotionsService';

export class ListNotionsController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const {domainId} = req.params;
    const listNotionsService = container.resolve(ListNotionsService);
    const notions = await listNotionsService.execute({ domainId });
    return res.status(201).json({ message: 'success', payload: notions });
  }
}
