import { Router } from 'express';

import DevController from './app/controllers/DevController';
import SearchController from './app/controllers/SearchController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.post('/sessions', SessionController.store);

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index);

export default routes;
