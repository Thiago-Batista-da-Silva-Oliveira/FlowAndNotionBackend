import { Notion } from "../infra";


export interface INotionRepository {
  create(data): Promise<Notion>;
  findMany(domainId: string): Promise<Notion[]>;
  findBy(data: {id: string}): Promise<Notion>;
  delete(data: {id: string}): Promise<void>;
}