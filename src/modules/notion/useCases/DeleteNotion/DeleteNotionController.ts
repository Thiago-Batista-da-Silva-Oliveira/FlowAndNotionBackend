import { Request, Response } from 'express';
import { container } from 'tsyringe';


import { DeleteNotionService } from './DeleteNotionService';

export class DeleteNotionController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteNotionService = container.resolve(DeleteNotionService);
    const notion = await deleteNotionService.execute({id });
    return res.status(201).json({ message: 'success', payload: notion });
  }
}
