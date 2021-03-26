import { Router } from 'express'

import { CreateToolController } from '../modules/tools/useCases/createTool/createToolController'
import { DeleteToolController } from '../modules/tools/useCases/deleteTool/deleteToolController'
import { ListToolsController } from '../modules/tools/useCases/listTools/listToolsController'
import { ListByTagToolsController } from '../modules/tools/useCases/listByTagTools/listByTagToolsController'

const toolsRouter = Router()

const createToolController = new CreateToolController()
const listToolsController = new ListToolsController()
const listByTagToolsController = new ListByTagToolsController()
const deleteToolController = new DeleteToolController()

toolsRouter.post('/', createToolController.handle)
toolsRouter.get('/', listToolsController.handle)
toolsRouter.get('/tags/:tag', listByTagToolsController.handle)
toolsRouter.delete('/:id', deleteToolController.handle)

export default toolsRouter
