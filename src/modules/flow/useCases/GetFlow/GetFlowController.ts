import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { GetFlowService } from './GetFlowService';

export class GetFlowController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const { id} = req.params;
    const getFlowService = container.resolve(GetFlowService);
    const domain = await getFlowService.execute({id });
    return res.status(201).json({ message: 'success', payload: domain });
  }
}
