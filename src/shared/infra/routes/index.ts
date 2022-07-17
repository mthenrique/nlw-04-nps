import { Router } from 'express';

import npsRoutes from '@modules/nps/infra/routes/nps.routes';
import surveyRoutes from '@modules/survey/infra/routes/survey.routes';
import sendMailRoutes from '@modules/surveyUser/infra/routes/sendMail.routes';
import userRoutes from '@modules/user/infra/routes/user.routes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/survey', surveyRoutes);
routes.use('/sendMail', sendMailRoutes);
routes.use('/nps', npsRoutes);

export default routes;
