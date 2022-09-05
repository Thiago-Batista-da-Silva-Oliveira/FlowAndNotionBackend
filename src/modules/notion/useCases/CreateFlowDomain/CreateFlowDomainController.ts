import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFlowDomainService } from "./CreateFlowDomainService";


export class CreateFlowDomainController {
    async handle(req: Request, res:Response): Promise<Response> {
        const {name} = req.body
        const {user: userId} = req

        const createFlowDomainService = container.resolve(CreateFlowDomainService)
        const data = await createFlowDomainService.execute({name, userId})
      
        return res.status(201).json({message: 'success', payload: data})
    }
}