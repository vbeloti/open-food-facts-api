import IProductRepository from '../../../repositories/interfaces/IProductRepository';
import { IProductDocument } from '../../../interfaces/IProduct';
import ProductDocumentFake from '../../../helpers/ProductDocumentFake';

export default class ShowService {
  constructor(private productRepository: IProductRepository) {}

  public async execute(id: string): Promise<IProductDocument> {
    return Promise.resolve(ProductDocumentFake);
  }
}
