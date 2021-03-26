import Tool from '../entities/Tool'

interface ITollDTO {
  title: string
  link: string
  description: string
  tags: string[]
}

interface IToolsRepository {
  create({ title, link, description, tags }: ITollDTO): Promise<Tool>
  delete(id: string): Promise<void>
  list(tag?: string): Promise<Tool[]>
}

export { IToolsRepository, ITollDTO }
