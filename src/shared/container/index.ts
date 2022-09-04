import { container } from 'tsyringe';
import './providers';

import { ICacheProvider } from './providers/CacheProvider/models/ICacheProvider';
import { CacheProvider } from './providers/CacheProvider/implementations/CacheProvider';
import { IUserRepository, UserRepository } from '../../modules/accounts';
import { FLOW_DOMAIN_REPOSITORY_KEY, USER_REPOSITORY_KEY } from '../../config';
import { FlowDomainRepository, IFlowDomainRepository } from '../../modules/flow';


container.registerSingleton<IUserRepository>(
  USER_REPOSITORY_KEY,
  UserRepository,
);

container.registerSingleton<IFlowDomainRepository>(
  FLOW_DOMAIN_REPOSITORY_KEY,
  FlowDomainRepository
);


container.registerSingleton<ICacheProvider>('CacheProvider', CacheProvider);
