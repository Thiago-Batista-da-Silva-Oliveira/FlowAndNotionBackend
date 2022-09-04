import { USER_REPOSITORY_KEY } from 'config';
import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../../repositories';

@injectable()
export class FindUserService {
  constructor(
    @inject(USER_REPOSITORY_KEY)
    private userRepository: IUserRepository,
  ) {}

  async execute({ id }) {
    const user = await this.userRepository.findBy({ id });

    return user
  }
}
