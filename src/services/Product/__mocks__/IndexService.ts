import IProductRepository from '../../../repositories/interfaces/IProductRepository';
import { IProductDocument } from '../../../interfaces/IProduct';
import ProductDocumentFake from '../../../helpers/ProductDocumentFake';

export default class IndexService {
  constructor(private productRepository: IProductRepository) {}

  public async execute(page:number, pagesize: number): Promise<IProductDocument[]> {
    return Promise.resolve([ProductDocumentFake]);
  }
}
