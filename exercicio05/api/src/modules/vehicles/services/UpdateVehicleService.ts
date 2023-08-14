import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IVehiclesRepository from '../repositories/IVehiclesRepository';
import Vehicle from '../infra/typeorm/entities/Vehicle';
import ICreateVehiclesDTO from '../dtos/ICreateVehiclesDTO';
import IBrandsRepository from '../repositories/IBrandsRepository';

@injectable()
class UpdateVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehicleRepository: IVehiclesRepository,
    @inject('BrandsRepository')
    private brandsRepository: IBrandsRepository,
  ) {}

  public async execute(
    id: string,
    data: Partial<ICreateVehiclesDTO>,
  ): Promise<Vehicle> {
    const checkBrandExists = await this.brandsRepository.findById(
      data.brand_id,
    );

    if (!checkBrandExists) {
      throw new AppError('Marca não encontrada.');
    }

    const hasVehicles = await this.vehicleRepository.findById(id);

    const { name, description, brand_id, sold, year } = data;

    if (!hasVehicles) {
      throw new AppError('Veiculo não encontrado.');
    }

    const newVehicles = await this.vehicleRepository.save({
      ...hasVehicles,
      name,
      description,
      brand_id,
      sold,
      year,
    } as any);

    return newVehicles;
  }
}

export default UpdateVehicleService;
