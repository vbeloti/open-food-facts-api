import { IProductDocument } from 'interfaces/IProduct';
import IProductRepository from 'repositories/interfaces/IProductRepository';

class ShowService {
  constructor(private productRepository: IProductRepository) {}

  public async execute(id: string): Promise<IProductDocument | null> {
    const product = await this.productRepository.findById(id);

    return product;
  }
}

export default ShowService;
