import { Router } from 'express';

import { NpsController } from '@modules/nps/useCases/NpsController';

const npsRoutes = Router();

const npsController = new NpsController();

npsRoutes.get('/:surveyId', npsController.handle);

export default npsRoutes;
