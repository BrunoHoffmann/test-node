import { container } from 'tsyringe';

import VehiclesRepository from '@modules/vehicles/infra/typeorm/repositories/VehiclesRepository';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';

container.registerSingleton<IVehiclesRepository>(
  'VehiclesRepository',
  VehiclesRepository,
);
