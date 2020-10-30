import request from 'supertest';

import ProductRepositoryFake from '../helpers/ProductRepositoryFake';
import IndexServiceFake from '../helpers/IndexServiceFake';
import server from '../server';
import IndexService from '../services/Product/IndexService';
import ProductController from './ProductController';
import ProductRepository from '../repositories/ProductRepository';

const mockData = () => ({
  code: 3661112502850,
  barcode: '3661112502850(EAN / EAN-13)',
  status: 'imported',
  imported_t: '2020-02-07T16:00:00Z',
  url: 'https://world.openfoodfacts.org/product/3661112502850',
  product_name: "Jambon de Paris cuit à l'étouffée",
  quantity: '240 g',
  categories: 'Meats, Prepared meats, Hams, White hams',
  packaging: 'Film en plastique, Film en plastique',
  brands: 'Tradilège, Marque Repère',
  image_url: 'https://static.openfoodfacts.org/images/products/366/111/250/2850/front_fr.3.400.jpg',
});

// jest.mock('../repositories/ProductRepository');
// jest.mock('../services/Product/IndexService');

// Apply the mock before the test run
// jest.mock('../repositories/ProductRepository', () => ProductRepositoryFake);

const mockReq = () => {
  const req = {} as any;
  req.query = { page: 1 };
  return req;
};

const mockRes = () => {
  const res = {} as any;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('ProductController', () => {
  // let mRes: any;
  // let mNext;
  // beforeEach(() => {
  //   mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  //   mNext = jest.fn();
  // });
  // afterEach(() => {
  //   jest.resetAllMocks();
  // });

  test('Should products is return product on call index method', async () => {
    // const mReq: any = { body: { data: 'any_data' } };

    // mRes = { status: 200, json: { data: 'any_data' } };

    // const productController = new ProductController();

    // const productRepository = new ProductRepositoryFake();
    // const indexProducts = new IndexServiceFake(productRepository);
    // indexProducts.execute(1, 2);

    // productController.index(mReq, mRes);
    // // const response = await request(server).get('/products');

    // expect(mRes.json).toEqual({ data: 'any_data' });
    // expect(response.status).toBe(200);
    // expect(response.body[0]).toHaveProperty('_id');
    // expect(response.body[0]).toHaveProperty('barcode');
    // expect(response.body[0]).toHaveProperty('brands');
    // expect(response.body[0]).toHaveProperty('categories');
    // expect(response.body[0]).toHaveProperty('code');
    // expect(response.body[0]).toHaveProperty('image_url');
    // expect(response.body[0]).toHaveProperty('packaging');
    // expect(response.body[0]).toHaveProperty('imported_t');
    // expect(response.body[0]).toHaveProperty('quantity');
    // expect(response.body[0]).toHaveProperty('status');
    // expect(response.body[0]).toHaveProperty('url');
  });

  test('Should products is return product on call index method', async () => {
    jest.setTimeout(30000);
    const mReq: any = { params: { id: '1' }, query: { page: '1' } };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    const mMemberRecord: any = { id: '1', username: 'KF1' };

    const productController = new ProductController();

    const productRepository = new ProductRepository();

    const indexService = new IndexService(productRepository);

    jest.spyOn(indexService, 'execute').mockResolvedValueOnce(mMemberRecord);

    // const indexProducts = new IndexService(productRepository);

    // jest.spyOn(indexProducts, 'execute').mockRejectedValue(new Error());

    // indexProducts.execute(1, 2);
    // jest.spyOn(IndexService).mockResolvedValue([{ data: 'asasa' }] as any);

    await productController.index(mReq, mReq);
    // const response = await request(server).get('/products');

    expect(mRes.json).toBeCalledWith({ member_detail: { id: '1', username: 'KF1' } });
  });
});
