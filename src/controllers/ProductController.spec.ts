import { Request, Response } from 'express';
import ProductDocumentFake from '../helpers/ProductDocumentFake';
import ProductController from './ProductController';

jest.mock('../services/Product/IndexService');
jest.mock('../services/Product/ShowService');

describe('ProductController', () => {
  test('Should return correct values on call index method', async () => {
    const fakeReq = { query: { page: '1' } } as unknown as Request;
    const fakeRes = { json: jest.fn() } as unknown as Response;

    const productController = new ProductController();

    await productController.index(fakeReq, fakeRes);

    expect(fakeRes.json).toBeCalledWith([ProductDocumentFake]);
  });

  test('Should return correct values on call show method', async () => {
    const fakeReq = { params: { code: 'any_code' }, query: { page: '1' } } as unknown as Request;
    const fakeRes = { json: jest.fn() } as unknown as Response;

    const productController = new ProductController();

    await productController.show(fakeReq, fakeRes);

    expect(fakeRes.json).toBeCalledWith(ProductDocumentFake);
  });
});
