
import { inject, injectable } from 'tsyringe';
import { USER_REPOSITORY_KEY } from '../../../../config';
import { AppError } from '../../../../shared/utils/AppError';
import { Validation } from '../../../../shared/utils/Validation';
import { User } from '../../infra';
import { IHashProvider } from '../../provider/models';
import { IUserRepository } from '../../repositories';

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