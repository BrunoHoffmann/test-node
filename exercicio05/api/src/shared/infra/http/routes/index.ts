import { Router } from 'express';
import vehiclesRouter from '@modules/vehicles/infra/http/routes/vehicle.router';

const routes = Router();

routes.get('/api', (request, response) => {
  response.status(200).send({
    success: 'true',
    message: 'Seja bem vindo(a) a API',
    version: '1.0.0',
  });
});

// App
routes.use('/vehicles', vehiclesRouter);

export default routes;
