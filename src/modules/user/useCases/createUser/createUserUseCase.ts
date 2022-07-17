import { inject, injectable } from 'tsyringe';
import * as yup from 'yup';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  email: string
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('PrismaUserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(userData: IRequest) {
    const schema = yup.object().shape({
      name: yup.string().required('Nome é obrigatório'),
      email: yup.string().email().required('Email inválido'),
    });

    try {
      await schema.validate(userData, { abortEarly: false });
    } catch (error) {
      throw new AppError(error, 400);
    }

    const userExists = await this.userRepository.findByEmail(userData.email);

    if (userExists) {
      throw new AppError('User already exists.', 400);
    }

    await this.userRepository.create(userData);

    return userData;
  }
}
