import { container } from 'tsyringe';
import './providers';

import { ICacheProvider } from './providers/CacheProvider/models/ICacheProvider';
import { CacheProvider } from './providers/CacheProvider/implementations/CacheProvider';
import { IUserRepository, UserRepository } from 'modules/accounts';
import { USER_REPOSITORY_KEY } from 'config';

container.registerSingleton<IUserRepository>(
  USER_REPOSITORY_KEY,
  UserRepository,
);

container.registerSingleton<ICacheProvider>('CacheProvider', CacheProvider);
