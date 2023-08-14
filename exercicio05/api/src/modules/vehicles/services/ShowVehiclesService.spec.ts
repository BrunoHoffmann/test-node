import { uuid } from 'uuidv4';

import FakeVehiclesRepository from '@modules/vehicles/repositories/fakes/FakeVehiclesRepository';
import ShowVehicleService from '@modules/vehicles/services/ShowVehicleService';
import AppError from '../../../shared/errors/AppError';

let fakeVehiclesRepository: FakeVehiclesRepository;
let showVehicle: ShowVehicleService;

describe('ListVehicle', () => {
  beforeEach(() => {
    fakeVehiclesRepository = new FakeVehiclesRepository();

    showVehicle = new ShowVehicleService(fakeVehiclesRepository);
  });

  it('should be able to show a vehicle', async () => {
    const create = await fakeVehiclesRepository.save({
      name: 'Hb20',
      description: 'description about car',
      brand_id: uuid(),
      year: 2000,
      sold: true,
    });

    const vehicle = await showVehicle.execute(create.id);

    expect(vehicle).toHaveProperty('id');
  });

  it('should not be able to show a vehicle if the vehicle do not exists', async () => {
    expect(showVehicle.execute('id')).rejects.toBeInstanceOf(AppError);
  });
});
