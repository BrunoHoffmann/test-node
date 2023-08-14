import ICreateVehiclesDTO from '../dtos/ICreateVehiclesDTO';
import IFilterListVehicleDTO from '../dtos/IFilterListVehicleDTO';
import Vehicle from '../infra/typeorm/entities/Vehicle';

export default interface IVehiclesRepository {
  findAll(filter: IFilterListVehicleDTO): Promise<Vehicle[] | []>;
  findById(id: string): Promise<Vehicle | undefined>;
  save(data: ICreateVehiclesDTO): Promise<Vehicle>;
  delete(id: string): Promise<void>;
}
