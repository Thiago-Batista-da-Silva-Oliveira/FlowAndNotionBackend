import { uuid } from 'uuidv4';

export class User {
  id?: string;
  email: string;
  password: string;

  private constructor(userInfo: User) {
    if (!this.id) {
      this.id = uuid();
    }
    Object.assign(this, { ...userInfo });
  }

  static create(data: User) {
    return new User(data);
  }
}