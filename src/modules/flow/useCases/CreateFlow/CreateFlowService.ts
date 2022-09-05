import { inject, injectable } from 'tsyringe';
import { FLOW_REPOSITORY_KEY } from '../../../../config';
import { Flow, FlowPosition } from '../../infra';
import { IFlowRepository } from '../../repositories';

@injectable()
export class CreateFlowService {
    constructor(
        @inject(FLOW_REPOSITORY_KEY)
        private flowRepository: IFlowRepository,
    ){}
  async execute({
    name,
    domainId,
    color,
    description,
    x,
    y
  }) {
    const flow = Flow.create({
      name,
      domainId,
      color,
      description,
    });

    const flowPosition = FlowPosition.create({
      x,
      y,
      flowId: flow.id
    })

    const newFlowDomain = await this.flowRepository.create(flow, flowPosition)

    return newFlowDomain;
  }
}