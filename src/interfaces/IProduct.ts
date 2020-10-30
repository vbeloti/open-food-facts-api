import { Document, Model } from 'mongoose';

export interface IProduct {
  code: number,
  barcode: string,
  status: string,
  imported_t: string,
  url: string,
  product_name: string,
  quantity: string,
  categories: string,
  packaging: string,
  brands: string,
  image_url: string,
}
export interface IProductDocument extends IProduct, Document {}

export type IProductModel = Model<IProductDocument>
