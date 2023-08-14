import ICreateBrandsDTO from '../dtos/ICreateBrandsDTO';
import Brand from '../infra/typeorm/entities/Brand';

export default interface IBrandsRepository {
  findById(id: string): Promise<Brand | undefined>;
  findAll(): Promise<Brand[] | []>;
  save(data: ICreateBrandsDTO): Promise<Brand>;
}
