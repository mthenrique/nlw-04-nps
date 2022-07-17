import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendMailSurveyUseCase } from './SendMailSurveyUseCase';

export class SendMailSurveyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, surveyId } = request.body;

    const sendMailUseCase = await container.resolve(SendMailSurveyUseCase);

    const surveyUser = await sendMailUseCase.execute({
      email,
      surveyId,
    });

    return response.status(200).json(surveyUser);
  }
}
