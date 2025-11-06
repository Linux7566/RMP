import {Router} from 'express'
import {getAllClients, postClient, getOneClient, deleteClient} from '../controllers/clientController.js'

const clientRouter = new Router();
clientRouter.get('/', getAllClients)
clientRouter.get('/:id', getOneClient)
clientRouter.post('/', postClient)
clientRouter.delete('/:id', deleteClient)


export default clientRouter