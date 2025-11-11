import {Router} from 'express'
import {getOrder, postOrder, updateStatusOrder} from '../controllers/orderControllers.js'

const orderRouter = new Router();

orderRouter.get('/', getOrder)
orderRouter.post('/', postOrder)
orderRouter.patch('/:id', updateStatusOrder)

export default orderRouter