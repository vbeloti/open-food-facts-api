import request from 'supertest';
import AppError from '../errors/AppError';

import server from '../server';

import ProductController from './ProductController';

import { mockRequest, mockResponse } from '../helpers/interceptor';

// jest.mock('./ProductController');
// jest.mock('./ProductController', jest.fn());
// const productController = new ProductController();

const mockData = {
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
};

jest.mock('./ProductController', () => function () {
  return { index: () => 'asasasa' };
});

// const mockedProductController = productController as jest.Mocked<typeof productController>;

// const productController = new ProductController();

// jest.mock('routes', () => [
//   {
//     state: 'MI',
//     capital: 'Lansing',
//     governor: 'Gretchen Whitmer',
//   },
//   {
//     state: 'GA',
//     capital: 'Atlanta',
//     governor: 'Brian Kemp',
//   },
// ]);

describe('ProductController', () => {
  // test('Should products is return product on call index method', async () => {
  //   const response = await request(server).get('/products');

  //   expect(response.status).toBe(200);
  //   expect(response.body[0]).toHaveProperty('_id');
  //   expect(response.body[0]).toHaveProperty('barcode');
  //   expect(response.body[0]).toHaveProperty('brands');
  //   expect(response.body[0]).toHaveProperty('categories');
  //   expect(response.body[0]).toHaveProperty('code');
  //   expect(response.body[0]).toHaveProperty('image_url');
  //   expect(response.body[0]).toHaveProperty('packaging');
  //   expect(response.body[0]).toHaveProperty('imported_t');
  //   expect(response.body[0]).toHaveProperty('quantity');
  //   expect(response.body[0]).toHaveProperty('status');
  //   expect(response.body[0]).toHaveProperty('url');
  // });

  test('Should throw on non existing products', async () => {
    const productController = new ProductController();

    const req = mockRequest();
    const res = mockResponse();
    // const productController = new ProductController();

    // const indexMock = jest.spyOn(productController, 'index').mockReturnValueOnce({ data: 'x' } as any);

    // const response = await request(server).get('/products');

    // console.log(response.status);

    expect(productController.index(req, res)).toBe(200);
  });
});
