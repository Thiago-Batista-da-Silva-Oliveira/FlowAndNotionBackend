import { ICreateFlowDomainDTO } from '../dtos';
import { FlowDomain } from '../infra/prisma/entities/FlowDomain';

export interface IFlowDomainRepository {
  create(data: ICreateFlowDomainDTO): Promise<FlowDomain>;
  findBy(data: {id: string}): Promise<FlowDomain>;
  deleteDomain(data: {id: string}): Promise<void>;
  exists(name: string, userId: string): Promise<boolean>;
  findManyDomains(userId: string): Promise<FlowDomain[]>;
}