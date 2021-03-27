import { Router } from 'express'

import toolsRouter from './tools.routes'
import usersRouter from './users.routes'
import authenticateRoutes from './authenticate.routes'

const router = Router()

router.use('/tools', toolsRouter)
router.use('/users', usersRouter)
router.use(authenticateRoutes)

export { router }
