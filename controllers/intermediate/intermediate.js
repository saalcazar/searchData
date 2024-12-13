import { validateIntermediate } from '../../schemas/Intermediate/intermediate.js'

export class IntermediateController {
  constructor ({ intermediateModel }) {
    this.intermediateModel = intermediateModel
  }

  createIndividualDiaries = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualDiaries = await this.intermediateModel.createIndividualDiaries({ input: result.data })
    res.status(201).json(newIndividualDiaries)
  }

  createIndividualMonitoring = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualMonitoring = await this.intermediateModel.createIndividualMonitoring({ input: result.data })
    res.status(201).json(newIndividualMonitoring)
  }

  createIndividualAlert = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualAlert = await this.intermediateModel.createIndividualAlert({ input: result.data })
    res.status(201).json(newIndividualAlert)
  }

  createIndividualWeekly = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualWeekly = await this.intermediateModel.createIndividualWeekly({ input: result.data })
    res.status(201).json(newIndividualWeekly)
  }

  createIndividualNgoWeekly = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualNgoWeekly = await this.intermediateModel.createIndividualNgoWeekly({ input: result.data })
    res.status(201).json(newIndividualNgoWeekly)
  }

  createIndividualSunday = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualSunday = await this.intermediateModel.createIndividualSunday({ input: result.data })
    res.status(201).json(newIndividualSunday)
  }

  createCollectiveDiaries = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveDiaries = await this.intermediateModel.createCollectiveDiaries({ input: result.data })
    res.status(201).json(newCollectiveDiaries)
  }

  createCollectiveMonitoring = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveMonitoring = await this.intermediateModel.createCollectiveMonitoring({ input: result.data })
    res.status(201).json(newCollectiveMonitoring)
  }

  createCollectiveAlert = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveAlert = await this.intermediateModel.createCollectiveAlert({ input: result.data })
    res.status(201).json(newCollectiveAlert)
  }

  createCollectiveWeekly = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveWeekly = await this.intermediateModel.createCollectiveWeekly({ input: result.data })
    res.status(201).json(newCollectiveWeekly)
  }

  createCollectiveNgoWeekly = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveNgoWeekly = await this.intermediateModel.createCollectiveNgoWeekly({ input: result.data })
    res.status(201).json(newCollectiveNgoWeekly)
  }

  createCollectiveSunday = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveSunday = await this.intermediateModel.createCollectiveSunday({ input: result.data })
    res.status(201).json(newCollectiveSunday)
  }
}
