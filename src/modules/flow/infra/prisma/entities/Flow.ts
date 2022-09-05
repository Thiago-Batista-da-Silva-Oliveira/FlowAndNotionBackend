export class Flow {
    id?: string;
    name: string
    domainId: string;
    color: string
    description: string;
  
    private constructor(flowInfo: Flow) {
      Object.assign(this, { ...flowInfo });
    }
  
    static create(data: Flow) {
      return new Flow(data);
    }
  }