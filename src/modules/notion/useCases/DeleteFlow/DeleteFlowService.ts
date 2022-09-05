
import {  inject, injectable } from 'tsyringe';
import {  FLOW_REPOSITORY_KEY } from '../../../../config';
import { AppError } from '../../../../shared/utils/AppError';
import {  IFlowRepository, } from '../../repositories';


@injectable()
export class DeleteFlowService {
  constructor(
    @inject(FLOW_REPOSITORY_KEY)
    private flowRepository: IFlowRepository,
){}

  async execute({id}) {
   const flow = await this.flowRepository.findBy({ id });

   if(!flow) {
    throw new AppError("Nada encontrado!", 404)
   }

   await this.flowRepository.delete({id})
  }
}
