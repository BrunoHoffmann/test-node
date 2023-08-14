import { inject, injectable } from 'tsyringe';

import ICreateVehicleDTO from '../dtos/ICreateVehiclesDTO';
import IVehiclesRepository from '../repositories/IVehiclesRepository';
import Vehicle from '../infra/typeorm/entities/Vehicle';
import IBrandsRepository from '../repositories/IBrandsRepository';
import AppError from '../../../shared/errors/AppError';

@injectable()
class CreateVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
    @inject('BrandsRepository')
    private brandsRepository: IBrandsRepository,
  ) {}

  public async execute(data: ICreateVehicleDTO): Promise<Vehicle> {
    const checkBrandExists = await this.brandsRepository.findById(
      data.brand_id,
    );

    if (!checkBrandExists) {
      throw new AppError('Marca não encontrada.');
    }

    return this.vehiclesRepository.save(data);
  }
}

export default CreateVehicleService;
