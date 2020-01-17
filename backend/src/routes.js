import { Router } from 'express';

import DevController from './app/controllers/DevController';
import SearchController from './app/controllers/SearchController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/sessions', SessionController.store);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

routes.use(authMiddleware);
routes.get('/devs', DevController.index);
routes.put('/devs', DevController.update);

export default routes;
