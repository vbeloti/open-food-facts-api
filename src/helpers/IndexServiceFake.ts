import IProductRepository from '../repositories/interfaces/IProductRepository';
import { IProductDocument } from '../interfaces/IProduct';
import ProductDocumentFake from './ProductDocumentFake';

export default class IndexServiceFake {
  constructor(private productRepository: IProductRepository) {}

  public async execute(page:number, pagesize: number): Promise<IProductDocument[]> {
    return Promise.resolve([ProductDocumentFake]);
  }
}
