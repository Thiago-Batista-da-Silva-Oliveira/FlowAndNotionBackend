import { container } from 'tsyringe';
import './providers';

import { ICacheProvider } from './providers/CacheProvider/models/ICacheProvider';
import { CacheProvider } from './providers/CacheProvider/implementations/CacheProvider';
import { IUserRepository, UserRepository } from '../../modules/accounts';
import { FLOW_DOMAIN_REPOSITORY_KEY, FLOW_REPOSITORY_KEY, NOTION_DOMAIN_REPOSITORY_KEY, NOTION_REPOSITORY_KEY, USER_REPOSITORY_KEY } from '../../config';
import { FlowDomainRepository, IFlowDomainRepository, IFlowRepository } from '../../modules/flow';
import { FlowRepository } from '../../modules/flow/infra/prisma/repositories/FlowRepository';
import { INotionDomainRepository, INotionRepository, NotionDomainRepository } from '../../modules/notion';
import { NotionRepository } from '../../modules/notion/infra/prisma/repositories/NotionRepository';


container.registerSingleton<IUserRepository>(
  USER_REPOSITORY_KEY,
  UserRepository,
);

container.registerSingleton<IFlowDomainRepository>(
  FLOW_DOMAIN_REPOSITORY_KEY,
  FlowDomainRepository
);

container.registerSingleton<IFlowRepository>(
  FLOW_REPOSITORY_KEY,
  FlowRepository
);

container.registerSingleton<INotionRepository>(
  NOTION_REPOSITORY_KEY,
  NotionRepository
);


container.registerSingleton<INotionDomainRepository>(
  NOTION_DOMAIN_REPOSITORY_KEY,
  NotionDomainRepository
);



container.registerSingleton<ICacheProvider>('CacheProvider', CacheProvider);
