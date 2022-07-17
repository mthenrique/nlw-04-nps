import { inject, injectable } from 'tsyringe';

import { ISurveyUserRepository } from '@modules/surveyUser/repositories/ISurveyUserRepository';

@injectable()
export class NpsUseCase {
  constructor(
    @inject('PrismaSurveyUserRepository')
    private surveyUserRepository: ISurveyUserRepository,
  ) {}

  async execute(surveyId: string) {
    const surveysUsers = await this.surveyUserRepository.findBySurveyId(surveyId);

    const detractors = surveysUsers.filter(
      (survey) => survey.value >= 0 && survey.value <= 6,
    ).length;

    const passives = surveysUsers.filter(
      (survey) => survey.value >= 7 && survey.value <= 8,
    ).length;

    const promoters = surveysUsers.filter(
      (survey) => survey.value >= 9 && survey.value <= 10,
    ).length;

    const totalAnswers = surveysUsers.length;

    const npsCalc = ((promoters - detractors) / totalAnswers) * 100;
    const npsValue = Number(npsCalc.toFixed(2));

    return {
      detractors,
      passives,
      promoters,
      totalAnswers,
      npsValue,
    };
  }
}
