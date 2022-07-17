import { inject, injectable } from 'tsyringe';

import { ISurveyUserRepository } from '@modules/surveyUser/repositories/ISurveyUserRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  value: string;
  u: string;
}

@injectable()
export class SendMailAnswerUseCase {
  constructor(
    @inject('PrismaSurveyUserRepository')
    private surveyUserRepository: ISurveyUserRepository,
  ) {}

  async execute(answerData: IRequest) {
    const surveyUser = await this.surveyUserRepository.findById(answerData.u);

    if (!surveyUser) {
      throw new AppError('Survey User does not exists', 400);
    }

    const updatedSurveyUser = await this.surveyUserRepository.updateSurveyUserValueById(
      answerData.value,
      answerData.u,
    );

    return updatedSurveyUser;
  }
}
