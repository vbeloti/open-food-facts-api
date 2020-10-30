import { IProductDocument } from '../../interfaces/IProduct';
import IProductRepository from '../../repositories/interfaces/IProductRepository';

class IndexService {
  constructor(private productRepository: IProductRepository) {}

  public async execute(page:number, pagesize: number): Promise<IProductDocument[]> {
    const product = await this.productRepository.findAll(page, pagesize);

    return product;
  }
}

export default IndexService;
