import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import { CreateToolController } from '../modules/tools/useCases/createTool/createToolController'
import { DeleteToolController } from '../modules/tools/useCases/deleteTool/deleteToolController'
import { ListToolsController } from '../modules/tools/useCases/listTools/listToolsController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const toolsRouter = Router()

const createToolController = new CreateToolController()
const listToolsController = new ListToolsController()
const deleteToolController = new DeleteToolController()

toolsRouter.use(ensureAuthenticated)

toolsRouter.post('/', celebrate({
  [Segments.BODY]: {
    title: Joi.string().max(120).required(),
    link: Joi.string().required(),
    description: Joi.string().max(255).required(),
    tags: Joi.array().required()
  }
}), createToolController.handle)

toolsRouter.get('/', listToolsController.handle)

toolsRouter.delete('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  }
}), deleteToolController.handle)

export default toolsRouter
