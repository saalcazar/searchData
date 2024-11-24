import { validateArea } from '../../schemas/users/areas.js'

export class AreaController {
  constructor ({ areaModel }) {
    this.areaModel = areaModel
  }

  getAll = async (req, res) => {
    const areas = await this.areaModel.getAll()
    res.json(areas)
  }

  create = async (req, res) => {
    const result = validateArea(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newArea = await this.areaModel.create({ input: result.data })
    res.status(201).json(newArea)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.areaModel.delete({ id })
    if (result === false) {
      return res.status(400).json({ message: 'Area not found' })
    }
    return res.json({ message: 'Area deleted' })
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateArea(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const updateArea = await this.areaModel.update({ idArea: id, input: result.data })
    return res.status(201).json(updateArea)
  }
}
