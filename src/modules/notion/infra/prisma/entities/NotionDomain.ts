import { uuid } from "uuidv4";
export class NotionDomain {
  id?: string;
  name: string;
  userId: string;
  color: string;
  backgroundColor: string

  private constructor(notionDomainInfo: NotionDomain) {
    if (!this.id) {
      this.id = uuid();
    }
    Object.assign(this, { ...notionDomainInfo });
  }

  static create(data: NotionDomain) {
    return new NotionDomain(data);
  }
}