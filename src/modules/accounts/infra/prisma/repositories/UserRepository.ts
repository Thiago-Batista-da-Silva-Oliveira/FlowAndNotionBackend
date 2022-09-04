import { prisma } from '@config/prismaClient';
import {
  ICreateUserDTO,
  IUserRepository,
} from '@modules/accounts';
import { IFindUserDTO } from '@modules/accounts/dtos/IFindUser';

import { User } from '../entities/User';

export class UserRepository implements IUserRepository {
  private repository: typeof prisma.user;

  constructor() {
    this.repository = prisma.user;
  }

  async create(data: ICreateUserDTO): Promise<User> {
    return prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
      },
    });
  }

  async exists(email: string): Promise<boolean> {
    const userExists = await this.repository.findFirst({ where: { email } });
    return !!userExists;
  }


  async findBy(data: IFindUserDTO): Promise<User> {
    return this.repository.findFirst({
      where: data,
    });
  }

}