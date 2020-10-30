/* eslint-disable no-async-promise-executor */
import { Browser } from 'puppeteer';
import { IProductDocument } from './interfaces/IProduct';
import StoreService from './services/Product/StoreService';

const pageScrapper = (
  link: string | null,
  browser: Browser,
  storeService: StoreService,
): Promise<IProductDocument> => new Promise(
  async (resolve, _) => {
    const dataObj: IProductDocument = {} as IProductDocument;
    const newPage = await browser.newPage();
    await newPage.goto(`https://world.openfoodfacts.org/${link}`);

    dataObj.code = await newPage.$eval('#barcode', (code: Element) => Number(code.textContent));

    dataObj.barcode = await newPage.$eval('#barcode_paragraph', (barcode: Element) => (barcode as HTMLElement).innerText);

    dataObj.url = `https://world.openfoodfacts.org${link}`;

    dataObj.product_name = await newPage.$eval('h1[property="food:name"]', (name: Element) => name.textContent) as string;

    dataObj.quantity = await newPage.$$eval('.field', (quantity: Element[]) => (quantity[0]?.parentElement?.textContent?.includes('Quantity')
      ? quantity[0]?.parentElement?.textContent?.replace('Quantity: ', '') as string
      : quantity[1]?.parentElement?.textContent?.replace('Quantity: ', '')) as string);

    dataObj.categories = await newPage.$$eval('.field', (quantity: Element[]) => (quantity[3]?.parentElement?.textContent?.includes('Categories')
      ? quantity[3]?.parentElement?.textContent?.replace('Categories: ', '') as string
      : quantity[4]?.parentElement?.textContent?.replace('Categories: ', '')) as string);

    dataObj.packaging = await newPage.$$eval('.field', (quantity: Element[]) => (quantity[1]?.parentElement?.textContent?.includes('Packaging')
      ? quantity[1]?.parentElement?.textContent?.replace('Packaging: ', '') as string
      : quantity[2]?.parentElement?.textContent?.replace('Packaging: ', '')) as string);

    dataObj.brands = await newPage.$$eval('.field', (quantity: Element[]) => (quantity[2]?.parentElement?.textContent?.includes('Brands')
      ? quantity[2]?.parentElement?.textContent?.replace('Brands: ', '') as string
      : quantity[3]?.parentElement?.textContent?.replace('Brands: ', '')) as string);

    dataObj.image_url = await newPage.$eval('#og_image', (image: Element) => (image as HTMLImageElement).src);

    dataObj.status = 'imported';

    dataObj.imported_t = String(new Date());

    await storeService.execute(dataObj);

    resolve(dataObj);
    await newPage.close();
  },
);

export default pageScrapper;
