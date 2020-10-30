import mongoose from 'mongoose';
import { IProductDocument } from '../interfaces/IProduct';

const ProductSchema = new mongoose.Schema({
  code: Number,
  barcode: String,
  status: String,
  imported_t: String,
  url: String,
  product_name: String,
  quantity: String,
  categories: String,
  packaging: String,
  brands: String,
  image_url: String,
});

export default mongoose.model<IProductDocument>('Product', ProductSchema);
