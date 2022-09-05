
import { inject, injectable } from 'tsyringe';
import { FLOW_REPOSITORY_KEY } from '../../../../config';

import { IFlowRepository } from '../../repositories';

@injectable()
export class ListEdgesService {
  constructor(
    @inject(FLOW_REPOSITORY_KEY)
    private flowRepository: IFlowRepository,
){}

  async execute({ domainId }) {
    const domains = await this.flowRepository.findManyEdges(domainId);

    return domains
  }
}
