/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import puppeteer, { Browser } from 'puppeteer';
import { IProductDocument } from './interfaces/IProduct';
import ProductRepository from './repositories/ProductRepository';
import StoreService from './services/Product/StoreService';
import connection from './database/connection';
import pageScrapper from './pageScrapper';

async function scraper(browser: Browser, url: string, storeService: StoreService) {
  const page = await browser.newPage();

  await page.goto(url);
  const scrapedData: IProductDocument[] = [];

  async function scrapeCurrentPage(): Promise<IProductDocument[]> {
    await page.waitForSelector('.products li a');

    const urls = await page.evaluate(() => Array.from(document.querySelectorAll('.products li a'))
      .map((item) => item.getAttribute('href')));

    for (const link in urls) {
      const currentPageData = await pageScrapper(urls[link], browser, storeService);
      scrapedData.push(currentPageData);
    }

    await page.close();
    return scrapedData;
  }

  const data = await scrapeCurrentPage();

  return data;
}

let counter = 0;

async function run(maxPage = 5) {
  const productRepository = new ProductRepository();
  const storeService = new StoreService(productRepository);
  connection();

  const browser = await puppeteer.launch({ headless: true });

  const fromPage = counter === 0 ? 1 : (maxPage * counter) + 1;
  const toPage = counter === 0 ? maxPage : (fromPage + maxPage) - 1;
  counter++;

  let data: IProductDocument[] = [];

  for (let index = fromPage; index <= toPage; index++) {
    const url = `https://world.openfoodfacts.org/${index}`;

    try {
      const results = await scraper(browser, url, storeService);
      console.log(`URL: https://world.openfoodfacts.org/${index} Scrapped on ${new Date()}`);
      data = data.concat(results);
    } catch (error) {
      console.error(error);
    }
  }
}

export default run;
