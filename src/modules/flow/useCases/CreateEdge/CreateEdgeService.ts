import { inject, injectable } from 'tsyringe';
import { FLOW_REPOSITORY_KEY } from '../../../../config';
import { Edge } from '../../infra';
import { IFlowRepository } from '../../repositories';


@injectable()
export class CreateEdgeService {
  constructor(
    @inject(FLOW_REPOSITORY_KEY)
    private flowRepository: IFlowRepository,
){}

  async execute({
    flowIdSource,
    flowIdTarget,
    domainId
  }) {
  

    const edge = Edge.create({
      flowIdSource,
      flowIdTarget,
      domainId
    })

    const newEdge = await this.flowRepository.createEdge(edge)

    return newEdge
  }
}
