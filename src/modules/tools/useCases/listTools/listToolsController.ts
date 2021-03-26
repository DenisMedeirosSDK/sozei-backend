import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListToolsUseCase } from './listToolsUseCase'

class ListToolsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tag } = request.query
    const parsedTag = String(tag).split(',').map(tg => String(tg).trim())

    const listToolsUseCase = container.resolve(ListToolsUseCase)

    const tools = await listToolsUseCase.execute({ tag: parsedTag })

    return response.status(201).json(tools)
  }
}

export { ListToolsController }
