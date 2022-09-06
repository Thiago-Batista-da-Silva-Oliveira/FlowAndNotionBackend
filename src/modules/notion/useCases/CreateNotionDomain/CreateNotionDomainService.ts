
import { inject, injectable } from 'tsyringe';
import {  NOTION_DOMAIN_REPOSITORY_KEY } from '../../../../config';
import { AppError } from '../../../../shared/utils/AppError';
import { NotionDomain } from '../../infra';
import { INotionDomainRepository } from '../../repositories';

@injectable()
export class CreateNotionDomainService {
    constructor(
        @inject(NOTION_DOMAIN_REPOSITORY_KEY)
        private notionDomainRepository: INotionDomainRepository,
    ){}
  async execute({
    name,
    userId,
    color,
    backgroundColor
  }) {
    const nameExists = await this.notionDomainRepository.exists(name, userId);

    if (nameExists) {
      throw new AppError('Esse nome já foi cadastrado!');
    }


    const notionDomain = NotionDomain.create({
      name,
      userId,
      color,
      backgroundColor
    });

    const newNotionDomain = await this.notionDomainRepository.create(notionDomain)

    return newNotionDomain;
  }
}