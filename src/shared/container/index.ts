import { container } from 'tsyringe';

import { ISurveyRepository } from '@modules/survey/repositories/ISurveyRepository';
import { PrismaSurveyRepository } from '@modules/survey/repositories/prisma/PrismaSurveyRepository';
import { ISurveyUserRepository } from '@modules/surveyUser/repositories/ISurveyUserRepository';
import { PrismaSurveyUserRepository } from '@modules/surveyUser/repositories/prisma/PrismaSurveyUserRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import PrismaUserRepository from '@modules/user/repositories/prisma/PrismaUserRepository';
import { IMailAdapter } from '@shared/adapters/IMailAdapter.ts';
import { NodeMailerAdapter } from '@shared/adapters/nodeMailer/NodeMailerAdapter';

container.registerSingleton<IUserRepository>(
  'PrismaUserRepository',
  PrismaUserRepository,
);

container.registerSingleton<ISurveyRepository>(
  'PrismaSurveyRepository',
  PrismaSurveyRepository,
);

container.registerSingleton<ISurveyUserRepository>(
  'PrismaSurveyUserRepository',
  PrismaSurveyUserRepository,
);

container.registerSingleton<IMailAdapter>(
  'NodeMailerAdapter',
  NodeMailerAdapter,
);
