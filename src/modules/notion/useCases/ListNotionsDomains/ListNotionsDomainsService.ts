
import { inject, injectable } from 'tsyringe';
import { NOTION_DOMAIN_REPOSITORY_KEY } from '../../../../config';

import { INotionDomainRepository } from '../../repositories';

@injectable()
export class ListNotionsDomainsService {
  constructor(
    @inject(NOTION_DOMAIN_REPOSITORY_KEY)
    private notionDomainRepository: INotionDomainRepository,
){}

  async execute({ userId }) {
    const domains = await this.notionDomainRepository.findManyDomains(userId);

    return domains
  }
}
