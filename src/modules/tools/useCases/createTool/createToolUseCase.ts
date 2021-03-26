import { inject, injectable } from 'tsyringe'

import Tool from '../../entities/Tool'
import { IToolsRepository } from '../../repositories/IToolsRepository'

interface IRequest {
  title: string
  link: string
  description: string
  tags: string[]
}

@injectable()
class CreateToolUseCase {
  constructor(
    @inject('ToolRepository')
    private toolRepository: IToolsRepository
  ) { }

  async execute({ title, link, description, tags }: IRequest): Promise<Tool> {
    const tool = this.toolRepository.create({ title, link, description, tags })

    return tool
  }
}

export { CreateToolUseCase }
