import { ICreateNotionDomainDTO } from '../dtos';
import { NotionDomain } from '../infra';

export interface INotionDomainRepository {
  create(data: ICreateNotionDomainDTO): Promise<NotionDomain>;
  findBy(data: {id: string}): Promise<NotionDomain>;
  deleteDomain(data: {id: string}): Promise<void>;
  exists(name: string, userId: string): Promise<boolean>;
  findManyDomains(userId: string): Promise<NotionDomain[]>;
}