import { v4 as uuid } from 'uuid';

import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import ICreateVehicleDTO from '@modules/vehicles/dtos/ICreateVehiclesDTO';

import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicle';

class FakeVehiclesRepository implements IVehiclesRepository {
  private vehicles: Vehicle[] = [];

  public async findById(id: string): Promise<Vehicle | undefined> {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }

  public async findAll(): Promise<Vehicle[] | []> {
    return this.vehicles;
  }

  public async save({
    name,
    description,
    sold,
    year,
  }: ICreateVehicleDTO): Promise<Vehicle> {
    const vehicle = new Vehicle();

    Object.assign(vehicle, {
      id: uuid(),
      name,
      description,
      brand_id: uuid(),
      sold,
      year,
    });

    this.vehicles.push(vehicle);

    return vehicle;
  }

  public async delete(id: string): Promise<void> {
    this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
  }
}

export default FakeVehiclesRepository;
