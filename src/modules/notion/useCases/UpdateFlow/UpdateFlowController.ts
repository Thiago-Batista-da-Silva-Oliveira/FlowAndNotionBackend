import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateFlowService } from './UpdateFlowService';

export class UpdateFlowController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const {x ,y } = req.body
    const updateFlowService = container.resolve(UpdateFlowService);
    const flow = await updateFlowService.execute({ id, x,y });
    return res.status(201).json({ message: 'success', payload: flow });
  }
}
