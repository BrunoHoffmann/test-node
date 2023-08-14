import { uuid } from 'uuidv4';

import FakeBrandsRepository from '@modules/vehicles/repositories/fakes/FakeBrandsRepository';
import ListBrandsService from '@modules/vehicles/services/ListBrandsService';

let fakeBrandsRepository: FakeBrandsRepository;
let listBrands: ListBrandsService;

describe('ListBrand', () => {
  beforeEach(() => {
    fakeBrandsRepository = new FakeBrandsRepository();

    listBrands = new ListBrandsService(fakeBrandsRepository);
  });

  it('should be able to list a brand', async () => {
    await fakeBrandsRepository.save({
      name: 'Hb20',
    });

    const brand = await listBrands.execute();

    expect(brand[0]).toHaveProperty('id');
  });
});
