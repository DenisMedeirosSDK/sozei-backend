import { getRepository, Repository } from 'typeorm'

import Tool from '../../entities/Tool'
import { ITollDTO, IToolsRepository } from '../IToolsRepository'

class ToolRepository implements IToolsRepository {
  private repository: Repository<Tool>

  constructor() {
    this.repository = getRepository(Tool)
  }

  async list(): Promise<Tool[]> {
    const tools = await this.repository.find()

    return tools
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }

  async create({ title, link, description, tags }: ITollDTO): Promise<Tool> {
    const createTool = this.repository.create({
      title,
      link,
      description,
      tags
    })

    const tool = await this.repository.save(createTool)

    return tool
  }
}

export { ToolRepository }
