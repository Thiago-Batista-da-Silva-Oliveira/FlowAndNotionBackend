import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNotionDomainService } from "./CreateNotionDomainService";


export class CreateNotionDomainController {
    async handle(req: Request, res:Response): Promise<Response> {
        const {name, color, backgroundColor} = req.body
        const {user: userId} = req

        const createNotionDomainService = container.resolve(CreateNotionDomainService)
        const data = await createNotionDomainService.execute({name, userId, color, backgroundColor})
      
        return res.status(201).json({message: 'success', payload: data})
    }
}