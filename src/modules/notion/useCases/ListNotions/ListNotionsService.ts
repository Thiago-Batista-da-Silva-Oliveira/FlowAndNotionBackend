
import { inject, injectable } from 'tsyringe';
import { NOTION_REPOSITORY_KEY } from '../../../../config';

import { INotionRepository } from '../../repositories';

@injectable()
export class ListNotionsService {
  constructor(
    @inject(NOTION_REPOSITORY_KEY)
    private notionDomainRepository: INotionRepository,
){}

  async execute({ domainId }) {
    const notions = await this.notionDomainRepository.findMany(domainId);

    return notions
  }
}
