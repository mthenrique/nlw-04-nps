import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { NpsUseCase } from './NpsUseCase';

export class NpsController {
  async handle(request: Request, response: Response) {
    const { surveyId } = request.params;

    const npsCalc = await container.resolve(NpsUseCase);

    const npsResult = await npsCalc.execute(surveyId);

    return response.status(200).json(npsResult);
  }
}
