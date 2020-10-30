import ProductDocumentFake from '../../helpers/ProductDocumentFake';
import ProductRepositoryFake from '../../helpers/ProductRepositoryFake';
import ShowService from './ShowService';

describe('ShowService', () => {
  test('Should product is returned on success', async () => {
    const productRepository = new ProductRepositoryFake();
    const indexService = new ShowService(productRepository);
    const response = await indexService.execute('any_id');
    expect(response).toEqual(ProductDocumentFake);
  });
});
