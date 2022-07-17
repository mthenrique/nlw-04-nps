import { ICreateSurveyDTO } from '../dtos/ICreateSurveyDTO';
import Survey from '../entities/Survey';

export interface ISurveyRepository {
  create(survey: ICreateSurveyDTO): Promise<void>
  findAllSurveys(): Promise<Survey[]>
  findById(surveyId: string): Promise<Survey>
}
