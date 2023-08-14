import { uuid } from 'uuidv4';

import FakeVehiclesRepository from '@modules/vehicles/repositories/fakes/FakeVehiclesRepository';
import ListVehiclesService from '@modules/vehicles/services/ListVehiclesService';

let fakeVehiclesRepository: FakeVehiclesRepository;
let listVehicle: ListVehiclesService;

describe('ListVehicle', () => {
  beforeEach(() => {
    fakeVehiclesRepository = new FakeVehiclesRepository();

    listVehicle = new ListVehiclesService(fakeVehiclesRepository);
  });

  it('should be able to list a vehicle', async () => {
    await fakeVehiclesRepository.save({
      name: 'Hb20',
      description: 'description about car',
      brand_id: uuid(),
      year: 2000,
      sold: true,
    });

    const vehicle = await listVehicle.execute(null);

    expect(vehicle[0]).toHaveProperty('id');
  });
});
