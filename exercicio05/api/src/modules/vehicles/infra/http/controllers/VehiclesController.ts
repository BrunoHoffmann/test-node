import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import ListVehicleService from '../../../services/ListVehiclesService';
import ICreateVehiclesDTO from '../../../dtos/ICreateVehiclesDTO';
import CreateVehicleService from '../../../services/CreateVehicleService';
import ShowVehicleService from '../../../services/ShowVehicleService';
import UpdateVehicleService from '../../../services/UpdateVehicleService';
import DeleteVehicleService from '../../../services/DeleteVehicleService';
import ListBrandsService from '../../../services/ListBrandsService';

export default class VehiclesController {
  public async listBrands(request: Request, response: Response): Promise<any> {
    const listBrand = container.resolve(ListBrandsService);

    const results = await listBrand.execute();

    return response.json(instanceToInstance(results));
  }

  public async list(request: Request, response: Response): Promise<any> {
    let { brand } = request.query as any;

    const listVehicle = container.resolve(ListVehicleService);

    const results = await listVehicle.execute({ brand });

    return response.json(instanceToInstance(results));
  }

  public async show(request: Request, response: Response): Promise<any> {
    const { id } = request.params;
    const showVehicle = container.resolve(ShowVehicleService);

    const results = await showVehicle.execute(id);

    return response.json(instanceToInstance(results));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateVehiclesDTO;

    const createVehicle = container.resolve(CreateVehicleService);

    const result = await createVehicle.execute(data);

    return response.json(instanceToInstance(result));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const data = request.body as Partial<ICreateVehiclesDTO>;
    const { id } = request.params;

    const updateVehicle = container.resolve(UpdateVehicleService);

    const result = await updateVehicle.execute(id, data);

    return response.json(instanceToInstance(result));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteVehicle = container.resolve(DeleteVehicleService);

    await deleteVehicle.execute(id);

    return response.status(200).send();
  }
}
