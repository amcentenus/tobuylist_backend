import { Router } from 'express';

import TestController from './app/controllers/TestController';

const routes = Router();

routes.get('/test/server', TestController.server);
routes.get('/test/database', TestController.database);

export default routes;
