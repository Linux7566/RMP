import {Router} from 'express'
import {getOrder, postOrder} from '../controllers/orderControllers.js'

const orderRouter = new Router();

orderRouter.get('/', getOrder)
orderRouter.post('/', postOrder)

export default orderRouter