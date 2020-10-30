import { IProductDocument } from '../../interfaces/IProduct';
import IProductRepository from '../../repositories/interfaces/IProductRepository';

class StoreService {
  constructor(private productRepository: IProductRepository) {}

  public async execute(data: IProductDocument): Promise<void> {
    await this.productRepository.create(data);
  }
}

export default StoreService;
