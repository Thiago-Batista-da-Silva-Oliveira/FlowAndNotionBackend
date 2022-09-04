
import { prisma } from '../../../../../config';
import { ICreateFlowDomainDTO } from '../../../dtos';
import { IFlowDomainRepository } from '../../../repositories';
import { FlowDomain } from '../entities/FlowDomain';

export class FlowDomainRepository implements IFlowDomainRepository {
  private repository: typeof prisma.flowDomain;

  constructor() {
    this.repository = prisma.flowDomain;
  }

  async create(data: ICreateFlowDomainDTO): Promise<FlowDomain> {
    return prisma.flowDomain.create({
      data: {
        name: data.name,
        userId: data.userId,
      },
    });
  }

  async exists(name: string, userId:string): Promise<boolean> {
    const domainExits = await this.repository.findFirst({ where: { 
      AND: {
        name: {
          equals:name,
        },
        userId: {
          equals:userId,
        },
      },
     } });
    return !!domainExits;
  }

  async findManyDomains(userId:string): Promise<FlowDomain[]> {
    const domains = await this.repository.findMany({ where: { userId } });
    return domains;
  }


  async findBy(data: {id: string}): Promise<FlowDomain> {
    return this.repository.findFirst({
      where: data,
    });
  }

  async deleteDomain(data: {id: string}): Promise<void> {
    this.repository.delete({
      where: data,
    });
  }
}