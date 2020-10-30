import { IProductDocument } from '../interfaces/IProduct';
import IProductRepository from '../repositories/interfaces/IProductRepository';
import ProductDocumentFake from './ProductDocumentFake';

export default class ProductRepositoryFake implements IProductRepository {
  findAll(): Promise<IProductDocument[]> {
    return Promise.resolve([ProductDocumentFake]);
  }

  findById(): Promise<IProductDocument | null> {
    return Promise.resolve(ProductDocumentFake);
  }
}
