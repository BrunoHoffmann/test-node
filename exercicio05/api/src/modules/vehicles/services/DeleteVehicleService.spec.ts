import { uuid } from 'uuidv4';

import AppError from '@shared/errors/AppError';
import FakeVehiclesRepository from '@modules/vehicles/repositories/fakes/FakeVehiclesRepository';
import DeleteVehicleService from '@modules/vehicles/services/DeleteVehicleService';
import FakeBrandsRepository from '../repositories/fakes/FakeBrandsRepository';

let fakeVehiclesRepository: FakeVehiclesRepository;
let fakeBrandsRepository: FakeBrandsRepository;
let deleteVehicle: DeleteVehicleService;

describe('DeleteVehicle', () => {
  beforeEach(() => {
    fakeVehiclesRepository = new FakeVehiclesRepository();

    deleteVehicle = new DeleteVehicleService(fakeVehiclesRepository);
  });

  it('should be able to delete a vehicle', async () => {
    const create = await fakeVehiclesRepository.save({
      name: 'Hb20',
      description: 'description about car',
      brand_id: uuid(),
      year: 2000,
      sold: true,
    });

    const vehicle = await deleteVehicle.execute(create.id);

    expect(vehicle).toEqual(undefined);
  });

  it('should not be able to delete a vehicle with id not found', async () => {
    await expect(deleteVehicle.execute('id')).rejects.toBeInstanceOf(AppError);
  });
});
