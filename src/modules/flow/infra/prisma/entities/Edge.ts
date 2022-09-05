import { uuid } from "uuidv4";

export class Edge {
   id?: string
   flowIdSource: string
   flowIdTarget: string
    private constructor(edgeInfo: Edge) {
        if (!this.id) {
            this.id = uuid();
          }
      Object.assign(this, { ...edgeInfo });
    }
  
    static create(data: Edge) {
      return new Edge(data);
    }
  }