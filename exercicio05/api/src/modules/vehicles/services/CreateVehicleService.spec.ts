import { uuid } from 'uuidv4';

import AppError from '@shared/errors/AppError';
import FakeVehiclesRepository from '@modules/vehicles/repositories/fakes/FakeVehiclesRepository';
import CreateVehicleService from '@modules/vehicles/services/CreateVehicleService';
import FakeBrandsRepository from '../repositories/fakes/FakeBrandsRepository';

let fakeVehiclesRepository: FakeVehiclesRepository;
let fakeBrandsRepository: FakeBrandsRepository;
let createVehicle: CreateVehicleService;

describe('CreateVehicle', () => {
  beforeEach(() => {
    fakeVehiclesRepository = new FakeVehiclesRepository();
    fakeBrandsRepository = new FakeBrandsRepository();

    createVehicle = new CreateVehicleService(
      fakeVehiclesRepository,
      fakeBrandsRepository,
    );
  });

  it('should be able to create a new vehicle', async () => {
    const brand = await fakeBrandsRepository.save({ name: '123' });

    const vehicle = await createVehicle.execute({
      name: 'Hb20',
      description: 'description about car',
      brand_id: brand.id,
      year: 2000,
      sold: true,
    });

    expect(vehicle).toHaveProperty('id');
  });

  it('should not be able to create a new vehicle with non-existing brand', async () => {
    await expect(
      createVehicle.execute({
        name: 'Hb20',
        description: 'description about car',
        brand_id: uuid(),
        year: 2000,
        sold: true,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
