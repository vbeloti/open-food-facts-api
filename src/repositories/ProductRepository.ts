import Product from '../models/Product';
import { IProductDocument, IProductModel } from '../interfaces/IProduct';
import IProductRepository from './interfaces/IProductRepository';

class ProductRepository implements IProductRepository {
  private mongoRepository: IProductModel;

  constructor() {
    this.mongoRepository = Product;
  }

  public async findAll(page: number, pagesize: number): Promise<IProductDocument[]> {
    const products = this.mongoRepository.find().skip(pagesize * (page - 1)).limit(pagesize);
    return products;
  }

  public async findById(id: string): Promise<IProductDocument | null> {
    const product = this.mongoRepository.findById(id);

    return product;
  }
}

export default ProductRepository;
