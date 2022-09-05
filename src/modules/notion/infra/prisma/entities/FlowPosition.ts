export class FlowPosition {
    id?: string;
    x: number;
    y: number;
    flowId: string
  
    private constructor(flowPositionInfo: FlowPosition) {
      Object.assign(this, { ...flowPositionInfo });
    }
  
    static create(data: FlowPosition) {
      return new FlowPosition(data);
    }
  }