import { resolve } from 'path';
import { inject, injectable } from 'tsyringe';

import { ISurveyRepository } from '@modules/survey/repositories/ISurveyRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IMailAdapter } from '@shared/adapters/IMailAdapter.ts';
import AppError from '@shared/errors/AppError';

import { ISurveyUserRepository } from '../../repositories/ISurveyUserRepository';

interface IRequest {
  surveyId: string
  email: string
}

interface INpsVariables {
  name: string
  title: string
  description: string
  id: string
  link: string
}

@injectable()
export class SendMailSurveyUseCase {
  constructor(
    @inject('PrismaSurveyUserRepository')
    private surveyUserRepository: ISurveyUserRepository,

    @inject('PrismaSurveyRepository')
    private surveyRepository: ISurveyRepository,

    @inject('PrismaUserRepository')
    private userRepository: IUserRepository,

    @inject('NodeMailerAdapter')
    private mailAdapter: IMailAdapter,
  ) {}

  async execute(data: IRequest) {
    if (!data.surveyId) {
      throw new AppError('Survey Id is not valid.', 400);
    }

    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new AppError('User does not exists', 400);
    }

    // TODO: Mesmo surveyId chegando como undefined findById retorna uma pesquisa
    const survey = await this.surveyRepository.findById(data.surveyId);

    if (!survey) {
      throw new AppError('Survey does not exists', 400);
    }

    const surveyUserExists = await this.surveyUserRepository.findSurveyNotResponded(user.id);

    const variables: INpsVariables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      id: '',
      link: process.env.URL_MAIL,
    };

    const path = resolve(__dirname, '..', '..', '..', '..', 'views', 'emails', 'npsMail.hbs');

    if (surveyUserExists) {
      variables.id = surveyUserExists.id;

      await this.mailAdapter.sendMail({
        to: user.email,
        subject: survey.title,
        variables,
        path,
      });

      return surveyUserExists;
    }

    const surveyUser = await this.surveyUserRepository.create({
      user_id: user.id,
      survey_id: data.surveyId,
    });

    variables.id = surveyUser.id;

    await this.mailAdapter.sendMail({
      to: user.email,
      subject: survey.title,
      variables,
      path,
    });

    return surveyUser;
  }
}
