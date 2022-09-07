import { inject, injectable } from 'tsyringe';
import {  NOTION_REPOSITORY_KEY } from '../../../../config';
import {  Notion } from '../../infra';
import { INotionRepository } from '../../repositories/INotionRepository';

@injectable()
export class CreateNotionService {
  constructor(
    @inject(NOTION_REPOSITORY_KEY)
    private notionRepository: INotionRepository,
){}
  async execute({
    domainId,
    title,
    text,
    date
  }) {
    const notion = Notion.create({
      domainId,
      title,
      text,
      date
    });

    const newNotion = await this.notionRepository.create(notion)

    return newNotion;
  }
}