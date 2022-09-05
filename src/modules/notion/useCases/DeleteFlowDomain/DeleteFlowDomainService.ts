
import {  inject, injectable } from 'tsyringe';
import { FLOW_DOMAIN_REPOSITORY_KEY } from '../../../../config';
import { AppError } from '../../../../shared/utils/AppError';
import { IFlowDomainRepository, } from '../../repositories';


@injectable()
export class DeleteFlowDomainService {
  constructor(
    @inject(FLOW_DOMAIN_REPOSITORY_KEY)
    private flowDomainRepository: IFlowDomainRepository,
){}

  async execute({id}) {
   const domain = await this.flowDomainRepository.findBy({ id });

   if(!domain) {
    throw new AppError("Nada encontrado!", 404)
   }

   await this.flowDomainRepository.deleteDomain({id})
  }
}
