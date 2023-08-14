import { inject, injectable } from 'tsyringe';
import IBrandsRepository from '../repositories/IBrandsRepository';
import Brand from '../infra/typeorm/entities/Brand';

@injectable()
class ListBrandsService {
  constructor(
    @inject('BrandsRepository')
    private brandsRepository: IBrandsRepository,
  ) {}

  public async execute(): Promise<Brand[] | []> {
    return this.brandsRepository.findAll();
  }
}

export default ListBrandsService;
