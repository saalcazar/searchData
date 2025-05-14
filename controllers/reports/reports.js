import { validateReport } from '../../schemas/reports/reports.js'

export class ReportController {
  constructor ({ reportModel }) {
    this.reportModel = reportModel
  }

  getAll = async (req, res) => {
    const result = await this.reportModel.getAll()
    res.status(201).json(result)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const result = await this.reportModel.getById({ id })
    res.status(201).json(result)
  }

  create = async (req, res) => {
    req.body.linkreport = req.file ? `/uploads/reports/${req.file.filename}` : 'ruta por defecto'
    const result = validateReport(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newReport = await this.reportModel.create({ input: result.data })
    res.status(201).json(newReport)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.reportModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Report deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateReport(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newReport = await this.reportModel.update({ idReport: id, input: result.data })
    res.status(201).json(newReport)
  }
}
