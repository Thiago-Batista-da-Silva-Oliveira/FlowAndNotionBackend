import { uuid } from "uuidv4";

export class FlowDomain {
  id?: string;
  name: string;
  userId: string;

  private constructor(flowDomainInfo: FlowDomain) {
    if (!this.id) {
      this.id = uuid();
    }
    Object.assign(this, { ...flowDomainInfo });
  }

  static create(data: FlowDomain) {
    return new FlowDomain(data);
  }
}