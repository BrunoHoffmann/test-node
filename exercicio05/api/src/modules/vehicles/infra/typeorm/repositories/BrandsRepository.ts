import { Repository } from 'typeorm';

import IBrandsRepository from '@modules/vehicles/repositories/IBrandsRepository';

import Brand from '@modules/vehicles/infra/typeorm/entities/Brand';
import { AppDataSource } from '@shared/infra/typeorm/data-source';

class BrandsRepository implements IBrandsRepository {
  private ormRepository: Repository<Brand>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Brand);
  }

  public async findById(id: string): Promise<Brand | undefined> {
    return this.ormRepository.findOne({
      where: {
        id,
      },
    });
  }

  public async findAll(): Promise<Brand[] | []> {
    return this.ormRepository.find();
  }

  public async save(brand: Brand): Promise<any> {
    return this.ormRepository.save(brand);
  }
}

export default BrandsRepository;
