import { Router } from 'express';
import ProductController from './controllers/ProductController';

const router = Router();

const productController = new ProductController();

router.get('/', (req, res) => res.json({ message: 'Fullstack Challenge 20201026' }));

router.get('/products', productController.index);
router.get('/products/:code', productController.show);

export default router;
