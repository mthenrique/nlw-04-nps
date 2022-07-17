import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO';
import { prisma } from '@shared/database/prismaClient';

import User from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

class PrismaUserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await prisma.users.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    });

    return user;
  }

  async create(userData: ICreateUserDTO): Promise<void> {
    await prisma.users.create({
      data: {
        ...userData,
      },
    });

    // return user;
  }
}

export default PrismaUserRepository;
