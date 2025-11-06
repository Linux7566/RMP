import {Router} from 'express';
import {getProducts} from '../controllers/ordersController.js';
import {postProducts} from '../controllers/ordersController.js';

const router = new Router();

router.get('/', getProducts);
router.post('/', postProducts);

export default router;
