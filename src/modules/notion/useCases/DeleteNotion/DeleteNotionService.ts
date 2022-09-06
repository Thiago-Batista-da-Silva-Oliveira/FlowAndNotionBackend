
import {  inject, injectable } from 'tsyringe';
import {   NOTION_REPOSITORY_KEY } from '../../../../config';
import { AppError } from '../../../../shared/utils/AppError';
import {   INotionRepository, } from '../../repositories';


@injectable()
export class DeleteNotionService {
  constructor(
    @inject(NOTION_REPOSITORY_KEY)
    private notionRepository: INotionRepository,
){}

  async execute({id}) {
   const flow = await this.notionRepository.findBy({ id });

   if(!flow) {
    throw new AppError("Nada encontrado!", 404)
   }

   await this.notionRepository.delete({id})
  }
}
