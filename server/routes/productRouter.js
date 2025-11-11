import {Router} from 'express'
import {getProduct, postProduct, updateProduct} from '../controllers/productController.js'

const productRouter = new Router();

productRouter.get('/', getProduct)
productRouter.post('/', postProduct)
productRouter.put('/:id', updateProduct);

export default productRouter