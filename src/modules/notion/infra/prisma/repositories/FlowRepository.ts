import { prisma } from '../../../../../config';
import { ICreateFlowDTO } from '../../../dtos/ICreateFlowDTO';
import {  IFlowRepository } from '../../../repositories';
import { Flow, FlowPosition } from '../entities';

export class FlowRepository implements IFlowRepository {
  private repository: typeof prisma.flow;
  private positionRepository: typeof prisma.flowPosition;

  constructor() {
    this.repository = prisma.flow;
    this.positionRepository = prisma.flowPosition;
  }

  async create(data: ICreateFlowDTO, positions: {x: number; y: number, flowId: string; id: string}): Promise<Flow> {
    return prisma.flow.create({
      data: {
       ...data,
       flowPosition: {
        create: {...positions}
       }
      },
    });
  }


  async update(
    flowId: { flowId: string },
    data: {
     x?: number;
     y?: number
    },
  ): Promise<FlowPosition> {
    return this.positionRepository.update({
      where: flowId,
      data,
    });
  }

  async findBy(data: {id: string}): Promise<Flow> {
    return this.repository.findFirst({
      where: data,
    });
  }

  async findMany(domainId:string): Promise<Flow[]> {
    const domains = await this.repository.findMany({ where: { domainId }, include:{flowPosition: true, source: true, target: true} });
    return domains;
  }

  async delete(data: {id: string}): Promise<void> {
    this.repository.delete({
      where: data,
    });
  }
}