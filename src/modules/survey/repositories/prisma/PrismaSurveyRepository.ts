import { ICreateSurveyDTO } from '@modules/survey/dtos/ICreateSurveyDTO';
import Survey from '@modules/survey/entities/Survey';
import { prisma } from '@shared/database/prismaClient';

import { ISurveyRepository } from '../ISurveyRepository';

export class PrismaSurveyRepository implements ISurveyRepository {
  async create(surveyData: ICreateSurveyDTO): Promise<void> {
    await prisma.surveys.create({
      data: {
        ...surveyData,
      },
    });

    // return survey
  }

  async findAllSurveys(): Promise<Survey[]> {
    const surveys = await prisma.surveys.findMany();
    return surveys;
  }

  async findById(surveyId: string): Promise<Survey | undefined> {
    const survey = await prisma.surveys.findFirst({
      where: {
        // id: surveyId,
        id: {
          equals: surveyId,
          mode: 'insensitive',
        },
      },
    });

    return survey;
  }
}
