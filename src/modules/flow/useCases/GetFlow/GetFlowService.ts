
import {  inject, injectable } from 'tsyringe';
import {  FLOW_REPOSITORY_KEY } from '../../../../config';
import { Flow } from '../../infra';
import {  IFlowRepository, } from '../../repositories';


@injectable()
export class GetFlowService {
  constructor(
    @inject(FLOW_REPOSITORY_KEY)
    private flowRepository: IFlowRepository,
){}

  async execute({id}): Promise<Flow> {
   const flow = await this.flowRepository.findBy({ id });

   return flow
  }
}
