import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IVehiclesRepository from '../repositories/IVehiclesRepository';
import Vehicle from '../infra/typeorm/entities/Vehicle';
import ICreateVehiclesDTO from '../dtos/ICreateVehiclesDTO';

@injectable()
class UpdateVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehicleRepository: IVehiclesRepository,
  ) {}

  public async execute(
    id: string,
    data: Partial<ICreateVehiclesDTO>,
  ): Promise<Vehicle> {
    const hasVehicles = await this.vehicleRepository.findById(id);

    const { name, brand_id, sold, year } = data;

    if (!hasVehicles) {
      throw new AppError('Veiculo não encontrado.');
    }

    const newVehicles = await this.vehicleRepository.save({
      ...hasVehicles,
      name,
      brand_id,
      sold,
      year,
    } as any);

    return newVehicles;
  }
}

export default UpdateVehicleService;
