import { Router } from 'express'

import { CreateToolController } from '../modules/tools/useCases/createTool/createToolController'
import { DeleteToolController } from '../modules/tools/useCases/deleteTool/deleteToolController'
import { ListToolsController } from '../modules/tools/useCases/listTools/listToolsController'

const toolsRouter = Router()

const createToolController = new CreateToolController()
const listToolsController = new ListToolsController()
const deleteToolController = new DeleteToolController()

toolsRouter.post('/', createToolController.handle)
toolsRouter.get('/', listToolsController.handle)
toolsRouter.delete('/:id', deleteToolController.handle)

export default toolsRouter
