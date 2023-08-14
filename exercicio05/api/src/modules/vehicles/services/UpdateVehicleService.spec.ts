import { uuid } from 'uuidv4';

import AppError from '@shared/errors/AppError';
import FakeVehiclesRepository from '@modules/vehicles/repositories/fakes/FakeVehiclesRepository';
import UpdateVehicleService from '@modules/vehicles/services/UpdateVehicleService';
import FakeBrandsRepository from '../repositories/fakes/FakeBrandsRepository';

let fakeVehiclesRepository: FakeVehiclesRepository;
let fakeBrandsRepository: FakeBrandsRepository;
let updateVehicle: UpdateVehicleService;

describe('UpdateVehicle', () => {
  beforeEach(() => {
    fakeVehiclesRepository = new FakeVehiclesRepository();
    fakeBrandsRepository = new FakeBrandsRepository();

    updateVehicle = new UpdateVehicleService(
      fakeVehiclesRepository,
      fakeBrandsRepository,
    );
  });

  it('should be able to update a vehicle', async () => {
    const brand = await fakeBrandsRepository.save({ name: '123' });
    const create = await fakeVehiclesRepository.save({
      name: 'Hb20',
      description: 'description about car',
      brand_id: brand.id,
      year: 2000,
      sold: true,
    });

    const vehicle = await updateVehicle.execute(create.id, {
      name: 'Hb20',
      description: 'description about car',
      brand_id: brand.id,
      year: 2000,
      sold: true,
    });

    expect(vehicle).toHaveProperty('id');
  });

  it('should not be able to update a new vehicle with brand not found', async () => {
    const create = await fakeVehiclesRepository.save({
      name: 'Hb20',
      description: 'description about car',
      brand_id: uuid(),
      year: 2000,
      sold: true,
    });

    await expect(
      updateVehicle.execute(create.id, {
        name: 'Hb20',
        description: 'description about car',
        brand_id: uuid(),
        year: 2000,
        sold: true,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a new vehicle with vehicle not found', async () => {
    const brand = await fakeBrandsRepository.save({ name: '123' });

    await expect(
      updateVehicle.execute('id', {
        name: 'Hb20',
        description: 'description about car',
        brand_id: brand.id,
        year: 2000,
        sold: true,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
