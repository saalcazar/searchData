import { validateIndividual } from '../../schemas/subjects/individuals.js'

export class IndividualController {
  constructor ({ individualModel }) {
    this.individualModel = individualModel
  }

  getAll = async (req, res) => {
    const individuals = await this.individualModel.getAll()
    res.json(individuals)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const individual = await this.individualModel.getById({ id })
    res.json(individual)
  }

  create = async (req, res) => {
    req.body.photoIndividual = req.file ? `/uploads/photos/${req.file.filename}` : 'ruta por defecto'
    const result = validateIndividual(req.body)
    if (!result.success) {
      console.error(result.error)
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividual = await this.individualModel.create({ input: result.data })
    res.status(201).json(newIndividual)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.individualModel.delete({ id })
    if (result === false) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Individual deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    req.body.photoIndividual = req.file
      ? `/uploads/photos/${req.file.filename}`
      : req.body.currentPhotoPath
    const result = validateIndividual(req.body)
    if (!result.success) {
      console.error(result.error)
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividual = await this.individualModel.update({ idIndividual: id, input: result.data })
    res.status(201).json(newIndividual)
  }

  deletePhoto = async (req, res) => {
    const { id, photoName } = req.params
    console.log(id, photoName)
    res.status(201).json('Photo deleted')
  }
}
