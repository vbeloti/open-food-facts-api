import ProductDocumentFake from '../../helpers/ProductDocumentFake';
import ProductRepositoryFake from '../../helpers/ProductRepositoryFake';
import IndexService from './IndexService';

describe('IndexService', () => {
  test('Should product is returned on success', async () => {
    const productRepository = new ProductRepositoryFake();
    const indexService = new IndexService(productRepository);
    const response = await indexService.execute(1, 2);
    expect(response).toEqual([ProductDocumentFake]);
  });
});
