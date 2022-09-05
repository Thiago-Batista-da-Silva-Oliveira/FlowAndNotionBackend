import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import { FLOW_REPOSITORY_KEY } from '../../../../config';
import { AppError } from '../../../../shared/utils/AppError';
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
    flowIdTarget
  }) {
  

    const edge = Edge.create({
      flowIdSource,
      flowIdTarget,
    })

    const newEdge = await this.flowRepository.createEdge(edge)

    return newEdge
  }
}
