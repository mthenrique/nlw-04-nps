import { ICreateSurveyUserDTO } from '../dtos/ICreateSurveyUserDTO';
import SurveyUser from '../entities/SurveyUser';

export interface ISurveyUserRepository {
  create(surveyUserData: ICreateSurveyUserDTO): Promise<SurveyUser>
  findSurveyNotResponded(userId: string): Promise<SurveyUser | null>
  findById(surveyUserId: string): Promise<SurveyUser | null>
  findBySurveyId(surveyId: string): Promise<SurveyUser[]>
  updateSurveyUserValueById(surveyUserValue: string, surveyUserId: string): Promise<SurveyUser>
}
