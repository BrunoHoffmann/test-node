import { inject, injectable } from 'tsyringe';

import ICreateVehicleDTO from '../dtos/ICreateVehiclesDTO';
import IVehiclesRepository from '../repositories/IVehiclesRepository';
import Vehicle from '../infra/typeorm/entities/Vehicle';

@injectable()
class CreateVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(data: ICreateVehicleDTO): Promise<Vehicle> {
    return this.vehiclesRepository.save(data);
  }
}

export default CreateVehicleService;
