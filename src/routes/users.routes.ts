import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'

const usersRoutes = Router()

const createUserController = new CreateUserController()

usersRoutes.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }
}), createUserController.handle)

export default usersRoutes
