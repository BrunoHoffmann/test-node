import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import VehiclesController from '../controllers/VehiclesController';

const vehiclesController = new VehiclesController();
const vehiclesRouter = Router();

vehiclesRouter.get('/find', vehiclesController.list);

vehiclesRouter.get('/brands/find', vehiclesController.listBrands);

vehiclesRouter.get('/:id', vehiclesController.show);

vehiclesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      brand_id: Joi.string().required(),
      year: Joi.number().required(),
      sold: Joi.boolean().required(),
    },
  }),
  vehiclesController.create,
);

vehiclesRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      brand_id: Joi.string().required(),
      year: Joi.number().required(),
      sold: Joi.string().required(),
    },
  }),
  vehiclesController.update,
);

vehiclesRouter.patch(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().allow('').optional(),
      description: Joi.string().allow('').optional(),
      brand_id: Joi.string().allow('').optional(),
      year: Joi.number().allow('').optional(),
      sold: Joi.string().allow('').optional(),
    },
  }),
  vehiclesController.update,
);

vehiclesRouter.delete('/:id', vehiclesController.delete);

export default vehiclesRouter;
