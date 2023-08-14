import { Repository } from 'typeorm';

import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';

import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicle';
import { AppDataSource } from '@shared/infra/typeorm/data-source';
import IFilterListVehicleDTO from '../../../dtos/IFilterListVehicleDTO';

class VehiclesRepository implements IVehiclesRepository {
  private ormRepository: Repository<Vehicle>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Vehicle);
  }

  public async findAll(filter: IFilterListVehicleDTO): Promise<Vehicle[] | []> {
    const vehicles = await this.ormRepository
      .createQueryBuilder('vehicles')
      .leftJoinAndSelect('vehicles.brand', 'brands')
      .where({
        ...filter,
      })
      .getMany();

    return vehicles;
  }

  public async findById(id: string): Promise<Vehicle | undefined> {
    const vehicle = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return vehicle;
  }

  public async save(vehicle: Vehicle): Promise<any> {
    return this.ormRepository.save(vehicle);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete({ id });
  }
}

export default VehiclesRepository;
