import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNotionService } from "./CreateNotionService";


export class CreateNotionController {
    async handle(req: Request, res:Response): Promise<Response> {
        const {domainId} = req.params
        const { 
        title,
        text,
        } = req.body

        const createFlowService = container.resolve(CreateNotionService)
        const data = await createFlowService.execute({  
            domainId,
            title,
            text,
        })
      
        return res.status(201).json({message: 'success', payload: data})
    }
}