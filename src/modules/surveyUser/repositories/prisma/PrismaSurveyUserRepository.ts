import { ICreateSurveyUserDTO } from '@modules/surveyUser/dtos/ICreateSurveyUserDTO';
import SurveyUser from '@modules/surveyUser/entities/SurveyUser';
import { prisma } from '@shared/database/prismaClient';

import { ISurveyUserRepository } from '../ISurveyUserRepository';

export class PrismaSurveyUserRepository implements ISurveyUserRepository {
  async create(surveyUserData: ICreateSurveyUserDTO): Promise<SurveyUser> {
    const survey = await prisma.surveysUsers.create({
      data: {
        survey_id: surveyUserData.survey_id,
        user_id: surveyUserData.user_id,
      },
    });

    return survey;
  }

  async findSurveyNotResponded(userId: string): Promise<SurveyUser | null> {
    const surveyNotResponded = await prisma.surveysUsers.findFirst({
      where: {
        AND: {
          user_id: userId,
          value: null,
        },
      },
    });

    return surveyNotResponded;
  }

  async findById(surveyUserId: string): Promise<SurveyUser | null> {
    const surveyUser = await prisma.surveysUsers.findFirst({
      where: {
        id: surveyUserId,
      },
    });

    return surveyUser;
  }

  async findBySurveyId(surveyId: string): Promise<SurveyUser[]> {
    const surveysUsers = await prisma.surveysUsers.findMany({
      where: {
        AND: {
          survey_id: surveyId,
          NOT: {
            value: null,
          },
        },
      },
    });

    return surveysUsers;
  }

  async updateSurveyUserValueById(
    surveyUserValue: string,
    surveyUserId: string,
  ): Promise<SurveyUser> {
    const updatedSurveyUser = await prisma.surveysUsers.update({
      data: {
        value: Number(surveyUserValue),
      },
      where: {
        id: surveyUserId,
      },
    });

    return updatedSurveyUser;
  }
}
