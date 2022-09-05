
import { inject, injectable } from 'tsyringe';
import { FLOW_DOMAIN_REPOSITORY_KEY } from '../../../../config';
import { AppError } from '../../../../shared/utils/AppError';
import { FlowDomain } from '../../infra';
import { IFlowDomainRepository } from '../../repositories';

@injectable()
export class CreateFlowDomainService {
    constructor(
        @inject(FLOW_DOMAIN_REPOSITORY_KEY)
        private flowDomainRepository: IFlowDomainRepository,
    ){}
  async execute({
    name,
    userId
  }) {
    const nameExists = await this.flowDomainRepository.exists(name, userId);

    if (nameExists) {
      throw new AppError('Esse nome já foi cadastrado!');
    }


    const flowDomain = FlowDomain.create({
      name,
      userId
    });

    const newFlowDomain = await this.flowDomainRepository.create(flowDomain)

    return newFlowDomain;
  }
}