import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { DeleteNotionDomainService } from './DeleteNotionDomainService';

export class DeleteNotionDomainController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const { id} = req.params;
    const deleteNotionDomainService = container.resolve(DeleteNotionDomainService);
    const domain = await deleteNotionDomainService.execute({id });
    return res.status(201).json({ message: 'success', payload: domain });
  }
}
