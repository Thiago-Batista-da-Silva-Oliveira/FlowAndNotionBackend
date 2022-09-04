import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { User } from '@prisma/client';

import { SessionService } from './SessionService';

export class SessionController {
  async handle(req: Request<any, any, User>, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const userSessionService = container.resolve(SessionService);
    const user = await userSessionService.execute({ email, password });
    return res.status(201).json({ message: 'success', payload: user });
  }
}
