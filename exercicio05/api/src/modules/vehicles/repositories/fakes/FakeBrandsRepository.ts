import IBrandsRepository from '@modules/vehicles/repositories/IBrandsRepository';

import Brand from '@modules/vehicles/infra/typeorm/entities/Brand';
import { uuid } from 'uuidv4';

class FakeBrandsRepository implements IBrandsRepository {
  private brands: Brand[] = [];

  public async findById(id: string): Promise<Brand | undefined> {
    return this.brands.find(brand => brand.id === id);
  }

  public async findAll(): Promise<Brand[] | []> {
    return this.brands;
  }

  public async save({ name }: { name: string }): Promise<Brand> {
    const brand = new Brand();

    Object.assign(brand, {
      name,
      id: uuid(),
    });

    this.brands.push(brand);

    return brand;
  }
}

export default FakeBrandsRepository;
