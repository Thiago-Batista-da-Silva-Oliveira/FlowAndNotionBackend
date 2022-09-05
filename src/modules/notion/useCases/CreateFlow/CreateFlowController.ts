import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFlowService } from "./CreateFlowService";


export class CreateFlowController {
    async handle(req: Request, res:Response): Promise<Response> {
        const { 
            name,
            domainId,
            color,
            description,
            x,
            y
        } = req.body

        const createFlowService = container.resolve(CreateFlowService)
        const data = await createFlowService.execute({  
            name,
            domainId,
            color,
            description,
            x,
            y
        })
      
        return res.status(201).json({message: 'success', payload: data})
    }
}