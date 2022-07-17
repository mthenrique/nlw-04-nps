import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import User from '../entities/User';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(user: ICreateUserDTO): Promise<void>;
}
