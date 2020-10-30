import { IProductDocument } from '../../interfaces/IProduct';

export default interface IProductRepository {
  findAll(page:number, pagesize: number): Promise<IProductDocument[]>;
  findById(id: string): Promise<IProductDocument | null>;
};
