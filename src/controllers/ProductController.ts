import { Request, Response } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import IndexService from '../services/Product/IndexService';
import ShowService from '../services/Product/ShowService';
import AppError from '../errors/AppError';

class ProductController {
  async index(req: Request, res: Response) {
    const { page = 1 } = req.query;
    const productRepository = new ProductRepository();
    const indexProducts = new IndexService(productRepository);
    const products = await indexProducts.execute(Number(page), 20);
    if (!products.length) throw new AppError('There are no products');

    return res.json(products);
  }

  async show(req: Request, res: Response) {
    const { code } = req.params;

    console.log('code', code);

    if (!code) throw new AppError('Parameter code does not exists');
    const productRepository = new ProductRepository();
    const showProduct = new ShowService(productRepository);
    const product = await showProduct.execute(code);
    if (!product) throw new AppError('Product does not exists');
    return res.json(product);
  }
}

export default ProductController;
