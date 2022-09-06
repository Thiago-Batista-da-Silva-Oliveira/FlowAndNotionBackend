
import { prisma } from '../../../../../config';
import { ICreateNotionDomainDTO } from '../../../dtos';
import { INotionDomainRepository } from '../../../repositories';
import { NotionDomain } from '../entities';


export class NotionDomainRepository implements INotionDomainRepository {
  private repository: typeof prisma.notionDomain;

  constructor() {
    this.repository = prisma.notionDomain;
  }

  async create(data: ICreateNotionDomainDTO): Promise<NotionDomain> {
    return prisma.notionDomain.create({
      data: {
        name: data.name,
        userId: data.userId,
        backgroundColor: data.backgroundColor,
        color: data.color,
        id: data.id,
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

  async findManyDomains(userId:string): Promise<NotionDomain[]> {
    const domains = await this.repository.findMany({ where: { userId } });
    return domains;
  }


  async findBy(data: {id: string}): Promise<NotionDomain> {
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