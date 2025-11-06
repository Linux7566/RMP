import {Router} from 'express'
import {getOrder_item, postOrder_item} from '../controllers/orderItemController.js'

const order_itemRouter = new Router();
order_itemRouter.get('/', getOrder_item)
order_itemRouter.post('/', postOrder_item)

export default order_itemRouter