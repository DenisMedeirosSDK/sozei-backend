import { container } from 'tsyringe'

import { ToolRepository } from '../../modules/tools/repositories/implementations/ToolRepository'
import { IToolsRepository } from '../../modules/tools/repositories/IToolsRepository'

container.registerSingleton<IToolsRepository>(
  'ToolRepository',
  ToolRepository
)
