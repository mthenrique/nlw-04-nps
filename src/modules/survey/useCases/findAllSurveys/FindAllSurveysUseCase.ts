import { ISurveyRepository } from "@modules/survey/repositories/ISurveyRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllSurveysUseCase {
  constructor(
    @inject('PrismaSurveyRepository')
    private surveyRepository: ISurveyRepository,
  ) {}
  
  async execute() {
    const surveys = await this.surveyRepository.findAllSurveys()

    return surveys
  }
}