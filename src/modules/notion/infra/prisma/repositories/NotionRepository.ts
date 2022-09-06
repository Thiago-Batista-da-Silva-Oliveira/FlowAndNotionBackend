import { prisma } from '../../../../../config';
import { ICreateFlowDTO } from '../../../dtos/ICreateFlowDTO';
import { INotionRepository } from '../../../repositories/INotionRepository';
import { Notion } from '../entities';

export class NotionRepository implements INotionRepository {
  private repository: typeof prisma.notion;

  constructor() {
    this.repository = prisma.notion;
  }

  async create(data): Promise<Notion> {
    return prisma.notion.create({
      data: {
       ...data,
      },
    });
  }

  async findBy(data: {id: string}): Promise<Notion> {
    return this.repository.findFirst({
      where: data,
    });
  }

  async findMany(domainId:string): Promise<Notion[]> {
    const domains = await this.repository.findMany({ where: { domainId }});
    return domains;
  }

  async delete(data: {id: string}): Promise<void> {
    this.repository.delete({
      where: data,
    });
  }
}