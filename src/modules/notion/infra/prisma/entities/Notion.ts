import { uuid } from "uuidv4";
export class Notion {
    id?: string;
    title: string;
    text: string;
    domainId: string;
    date: string;
  
    private constructor(notionInfo: Notion) {
      if (!this.id) {
        this.id = uuid();
      }
      Object.assign(this, { ...notionInfo });
    }
  
    static create(data: Notion) {
      return new Notion(data);
    }
  }