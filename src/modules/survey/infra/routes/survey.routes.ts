import { Router } from 'express';

import { CreateSurveyController } from '@modules/survey/useCases/createSurvey/CreateSurveyController';
import { FindAllSurveysController } from '@modules/survey/useCases/findAllSurveys/FindAllSurveysController';

const surveyRoutes = Router();

const createSurveyController = new CreateSurveyController();
const findAllSurveysController = new FindAllSurveysController();

surveyRoutes.post('/', createSurveyController.handle);
surveyRoutes.get('/', findAllSurveysController.handle);

export default surveyRoutes;
