export class FlowDomain {
  id?: string;
  name: string;
  userId: string;

  private constructor(flowDomainInfo: FlowDomain) {
    Object.assign(this, { ...flowDomainInfo });
  }

  static create(data: FlowDomain) {
    return new FlowDomain(data);
  }
}