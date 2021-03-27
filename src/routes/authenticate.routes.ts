import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController'

const authenticateRoutes = Router()
const authenticateUserController = new AuthenticateUserController()

authenticateRoutes.post('/sessions', celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }
}), authenticateUserController.handle)

export default authenticateRoutes
