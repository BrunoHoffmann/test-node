import { container } from 'tsyringe';

import VehiclesRepository from '@modules/vehicles/infra/typeorm/repositories/VehiclesRepository';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import IBrandsRepository from '../../modules/vehicles/repositories/IBrandsRepository';
import BrandsRepository from '../../modules/vehicles/infra/typeorm/repositories/BrandsRepository';

container.registerSingleton<IVehiclesRepository>(
  'VehiclesRepository',
  VehiclesRepository,
);

container.registerSingleton<IBrandsRepository>(
  'BrandsRepository',
  BrandsRepository,
);
