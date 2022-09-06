
import {  inject, injectable } from 'tsyringe';
import { NOTION_DOMAIN_REPOSITORY_KEY } from '../../../../config';
import { AppError } from '../../../../shared/utils/AppError';
import {  INotionDomainRepository, } from '../../repositories';


@injectable()
export class DeleteNotionDomainService {
  constructor(
    @inject(NOTION_DOMAIN_REPOSITORY_KEY)
    private notionDomainRepository: INotionDomainRepository,
){}

  async execute({id}) {
   const domain = await this.notionDomainRepository.findBy({ id });

   if(!domain) {
    throw new AppError("Nada encontrado!", 404)
   }

   await this.notionDomainRepository.deleteDomain({id})
  }
}
