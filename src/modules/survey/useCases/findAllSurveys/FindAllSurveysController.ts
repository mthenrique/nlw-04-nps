import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllSurveysUseCase } from './FindAllSurveysUseCase'

export class FindAllSurveysController {
  async handle(request: Request, response: Response) {
    
    const findAllSurveysUseCase = container.resolve(FindAllSurveysUseCase)

    const surveys = await findAllSurveysUseCase.execute()

    return response.status(200).json(surveys)
  }
}
