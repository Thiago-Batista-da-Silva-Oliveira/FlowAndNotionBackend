import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { DeleteFlowService } from './DeleteFlowService';

export class DeleteFlowController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const { id} = req.params;
    const deleteFlowService = container.resolve(DeleteFlowService);
    const flow = await deleteFlowService.execute({id });
    return res.status(201).json({ message: 'success', payload: flow });
  }
}
