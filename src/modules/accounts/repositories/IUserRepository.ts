import { ICreateUserDTO } from '../dtos';
import { IFindUserDTO } from '../dtos/IFindUser';
import { User } from '../infra/prisma/entities/User';

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  exists(email: string): Promise<boolean>;
  findBy(data: IFindUserDTO): Promise<User>;
}