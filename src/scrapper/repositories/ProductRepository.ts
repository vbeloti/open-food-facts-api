import Product from '../models/Product';
import { IProductDocument, IProductModel } from '../interfaces/IProduct';
import IProductRepository from './interfaces/IProductRepository';

class ProductRepository implements IProductRepository {
  private mongoRepository: IProductModel;

  constructor() {
    this.mongoRepository = Product;
  }

  public async create(data: IProductDocument): Promise<void> {
    await this.mongoRepository.create(data);
  }
}

export default ProductRepository;
