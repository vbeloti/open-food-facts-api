import { IProductDocument } from '../../interfaces/IProduct';

export default interface IProductRepository {
  create(data: IProductDocument): Promise<void>;
}
