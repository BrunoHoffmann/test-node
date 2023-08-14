import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IVehiclesRepository from '../repositories/IVehiclesRepository';

@injectable()
class DeleteVehicleService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const advertising = await this.vehiclesRepository.findById(id);

    if (!advertising) {
      throw new AppError('Veiculo não econtrado.');
    }

    await this.vehiclesRepository.delete(id);
  }
}

export default DeleteVehicleService;
