import { ICreateEdgeDTO } from '../dtos/ICreateEdgeDTO';
import { ICreateFlowDTO } from '../dtos/ICreateFlowDTO';
import { Edge, Flow, FlowPosition } from '../infra';

export interface IFlowRepository {
  create(data: ICreateFlowDTO, positions: {x: number; y: number; flowId?: string; id?: string}): Promise<Flow>;
  createEdge(data: ICreateEdgeDTO): Promise<Edge>;
  findMany(domainId: string): Promise<Flow[]>;
  findManyEdges(domainId: string): Promise<Edge[]>;
  findBy(data: {id: string}): Promise<Flow>;
  delete(data: {id: string}): Promise<Flow>;
  update(flowId: {flowId: string}, data: {x?: number; y?: number}): Promise<FlowPosition>;
}