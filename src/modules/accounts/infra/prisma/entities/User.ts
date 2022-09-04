

export class User {
  id?: string;
  email: string;
  password: string;

  private constructor(userInfo: User) {
    Object.assign(this, { ...userInfo });
  }

  static create(data: User) {
    return new User(data);
  }
}