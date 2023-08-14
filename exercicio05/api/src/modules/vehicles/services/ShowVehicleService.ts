import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicle';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';

@injectable()
class ShowVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(id: string): Promise<Vehicle> {
    const vehicles = await this.vehiclesRepository.findById(id);

    if (!vehicles) {
      throw new AppError('Veiculo não encontrado.');
    }

    return vehicles;
  }
}

export default ShowVehicleService;
