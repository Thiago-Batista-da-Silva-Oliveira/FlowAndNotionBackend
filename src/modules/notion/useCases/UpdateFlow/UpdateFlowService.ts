import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import { FLOW_REPOSITORY_KEY } from '../../../../config';
import { AppError } from '../../../../shared/utils/AppError';
import { IFlowRepository } from '../../repositories';


@injectable()
export class UpdateFlowService {
  constructor(
    @inject(FLOW_REPOSITORY_KEY)
    private flowRepository: IFlowRepository,
){}

  async execute({
    id,
    x,
    y
  }) {
    const flow = await this.flowRepository.findBy({ id });

    if (!flow) {
      throw new AppError('Nada encontrado', 404);
    }

    const updatedFlow = await this.flowRepository.update(
      { flowId: flow.id },
      {
       x,
       y
      },
    );

    if (!updatedFlow) {
      throw new AppError('Erro ao atualizar', 400);
    }

    return updatedFlow
  }
}
