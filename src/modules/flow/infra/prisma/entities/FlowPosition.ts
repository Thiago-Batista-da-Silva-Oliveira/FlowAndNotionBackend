import { uuid } from "uuidv4";
export class FlowPosition {
    id?: string;
    x: number;
    y: number;
    flowId?: string
  
    private constructor(flowPositionInfo: FlowPosition) {
      if (!this.id) {
        this.id = uuid();
      }
      Object.assign(this, { ...flowPositionInfo });
    }
  
    static create(data: FlowPosition) {
      return new FlowPosition(data);
    }
  }