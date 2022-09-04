import { USER_REPOSITORY_KEY } from '@config/constants';
import { User } from '@modules/accounts/infra/prisma/entities';
import { IHashProvider } from '@modules/accounts/provider/models';
import { IUserRepository } from '@modules/accounts/repositories';
import { AppError } from '@shared/utils/AppError';
import { Validation } from '@shared/utils/Validation';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateUserService {
    constructor(
        @inject(USER_REPOSITORY_KEY)
        private userRepository: IUserRepository,
        @inject('HashProvider')
        private hashProvider: IHashProvider
    ){}
  async execute({
    email,
    password,
  }) {
    Validation({
      password,
    });
    const userExists = await this.userRepository.exists(email);

    if (userExists) {
      throw new AppError('Esse email já foi cadastrado!');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = User.create({
      password: hashedPassword,
      email,
    });

    const newUser = await this.userRepository.create(user)

    delete newUser.password;

    return newUser;
  }
}