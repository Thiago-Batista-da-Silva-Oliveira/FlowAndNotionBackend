import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { DeleteFlowDomainService } from './DeleteFlowDomainService';

export class DeleteFlowDomainController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const { id} = req.params;
    const deleteFlowDomainService = container.resolve(DeleteFlowDomainService);
    const domain = await deleteFlowDomainService.execute({id });
    return res.status(201).json({ message: 'success', payload: domain });
  }
}
