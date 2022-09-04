import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { FindUserService } from './FindUserService';

export class FindUserController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const { id} = req.params;
    const userSessionService = container.resolve(FindUserService);
    const user = await userSessionService.execute({ id });
    return res.status(201).json({ message: 'success', payload: user });
  }
}
