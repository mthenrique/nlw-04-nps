import { Router } from 'express';

import { SendMailAnswerController } from '@modules/surveyUser/useCases/sendMailAnswer/SendMailAnswerController';
import { SendMailSurveyController } from '@modules/surveyUser/useCases/sendMailSurvey/SendMailSurveyController';

const sendMailRoutes = Router();

const sendMailSurveyController = new SendMailSurveyController();
const sendMailAnswerController = new SendMailAnswerController();

sendMailRoutes.post('/survey', sendMailSurveyController.handle);
sendMailRoutes.post('/answer/:value', sendMailAnswerController.handle);

export default sendMailRoutes;
