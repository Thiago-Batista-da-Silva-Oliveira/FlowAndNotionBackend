import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateEdgeService } from './CreateEdgeService';

export class CreateEdgeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {domainId} = req.params
    const { 
      flowIdSource,
      flowIdTarget
     } = req.body
    const createEdgeService = container.resolve(CreateEdgeService);
    const edge = await createEdgeService.execute({ flowIdSource,
      flowIdTarget, domainId });
    return res.status(201).json({ message: 'success', payload: edge });
  }
}
