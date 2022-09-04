
import { inject, injectable } from 'tsyringe';
import { FLOW_DOMAIN_REPOSITORY_KEY } from '../../../../config';

import { IFlowDomainRepository } from '../../repositories';

@injectable()
export class ListFlowDomainsService {
  constructor(
    @inject(FLOW_DOMAIN_REPOSITORY_KEY)
    private flowDomainRepository: IFlowDomainRepository,
  ) {}

  async execute({ userId }) {
    const domains = await this.flowDomainRepository.findManyDomains(userId);

    return domains
  }
}
