import { container, inject, injectable } from 'tsyringe';

import {
  HASH_PROVIDER,
  USER_REPOSITORY_KEY,
} from '@config/constants';

import { ICacheProvider } from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { IUserRepository } from '../../repositories';
import { AppError } from '@shared/utils/AppError';
import { IHashProvider } from '@modules/accounts/provider/models';
import { GenerateTokenProvider } from '@modules/accounts/provider/GenerateTokenProvider';

@injectable()
export class SessionService {
  constructor(
    @inject(USER_REPOSITORY_KEY)
    private userRepository: IUserRepository,
    @inject(HASH_PROVIDER)
    private hashProvider: IHashProvider,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute({ email, password }) {
    const user = await this.userRepository.findBy({ email });

    if (!user) {
      throw new AppError(
        'Email ou senha inválido! Verifique suas credências',
        400,
      );
    }

    const validatePassword = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!user || !validatePassword) {
      throw new AppError(
        'Email ou senha inválido! Verifique suas credências',
        400,
      );
    }

    const generateTokenProvider = container.resolve(GenerateTokenProvider);

    const token = await generateTokenProvider.execute(user);

    this.cacheProvider.setCache(`user-${user.id}`, user, 6 * 60 * 60);

    return { user, token };
  }
}
