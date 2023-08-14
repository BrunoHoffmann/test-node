import { inject, injectable } from 'tsyringe';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import Vehicle from '../infra/typeorm/entities/Vehicle';
import IFilterListVehicleDTO from '../dtos/IFilterListVehicleDTO';

@injectable()
class ListVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(
    filters: IFilterListVehicleDTO,
  ): Promise<Vehicle[] | []> {
    const result = await this.vehiclesRepository.findAll(filters);

    return result;
  }
}

export default ListVehicleService;
