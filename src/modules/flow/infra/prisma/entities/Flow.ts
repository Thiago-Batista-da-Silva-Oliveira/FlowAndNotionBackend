import { uuid } from "uuidv4";

export class Flow {
    id?: string;
    name: string
    domainId: string;
    color: string
    description: string;
  
    private constructor(flowInfo: Flow) {
      if (!this.id) {
        this.id = uuid();
      }
      Object.assign(this, { ...flowInfo });
    }
  
    static create(data: Flow) {
      return new Flow(data);
    }
  }