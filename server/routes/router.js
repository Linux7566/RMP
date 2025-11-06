import {Router} from 'express'
import clientRouter from './clientRouter.js'
import orderRouter from './orderRouter.js'
import order_itemRouter from './orderItemRouter.js'
import productRouter from './productRouter.js'

const router = new Router();

router.use('/clients', clientRouter);
router.use('/orders', orderRouter);
router.use('/order_items', order_itemRouter);
router.use('/products', productRouter);

export default router