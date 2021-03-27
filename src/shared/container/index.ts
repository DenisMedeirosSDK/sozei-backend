import { container } from 'tsyringe'

import { ToolRepository } from '../../modules/tools/repositories/implementations/ToolRepository'
import { IToolsRepository } from '../../modules/tools/repositories/IToolsRepository'

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository'
import { IUserRepository } from '../../modules/accounts/repositories/IUsersRepository'

container.registerSingleton<IToolsRepository>(
  'ToolRepository',
  ToolRepository
)

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
)
