import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './createUserUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    const user = await createUserUseCase.execute({
      name, email
    })

    return response.status(201).json(user)
  }
}