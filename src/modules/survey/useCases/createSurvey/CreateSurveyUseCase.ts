import { inject, injectable } from 'tsyringe';

import { ISurveyRepository } from '../../repositories/ISurveyRepository';

interface IRequest {
  title: string
  description: string
}

@injectable()
export class CreateSurveyUseCase {
  constructor(
    @inject('PrismaSurveyRepository')
    private surveyRepository: ISurveyRepository,
  ) {}

  async execute(surveyData: IRequest) {
    await this.surveyRepository.create(surveyData);

    return surveyData;
  }
}
