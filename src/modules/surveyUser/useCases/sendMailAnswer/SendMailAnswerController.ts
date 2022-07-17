import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendMailAnswerUseCase } from './SendMailAnswerUseCase';

export class SendMailAnswerController {
  async handle(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const sendMailAnswer = await container.resolve(SendMailAnswerUseCase);
    const answer = await sendMailAnswer.execute({
      value,
      u: String(u),
    });

    return response.status(200).json(answer);
  }
}
