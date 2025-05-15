import { validateIntermediate } from '../../schemas/Intermediate/intermediate.js'

export class IntermediateController {
  constructor ({ intermediateModel }) {
    this.intermediateModel = intermediateModel
  }

  // INDIVIDUALS

  // INDIVIDUAL REPORT
  getIndividualReport = async (req, res) => {
    const result = await this.intermediateModel.getIndividualReport()
    res.status(200).json(result)
  }

  createIndividualReport = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualReport = await this.intermediateModel.createIndividualReport({ input: result.data })
    res.status(201).json(newIndividualReport)
  }

  deleteIndividualReport = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteIndividualReport({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // INDIVIDUAL WEEKLY

  getIndividualWeekly = async (req, res) => {
    const individualWeekly = await this.intermediateModel.getIndividualWeekly()
    res.status(200).json(individualWeekly)
  }

  createIndividualWeekly = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newIndividualWeekly = await this.intermediateModel.createIndividualWeekly({ input: result.data })
    res.status(201).json(newIndividualWeekly)
  }

  deleteIndividualWeekly = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteIndividualWeekly({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // COLLECTIVES

  // COLLECTIVE REPORT

  getCollectiveReport = async (req, res) => {
    const result = await this.intermediateModel.getCollectiveReport()
    res.status(200).json(result)
  }

  createCollectiveReport = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveReport = await this.intermediateModel.createCollectiveReport({ input: result.data })
    res.status(201).json(newCollectiveReport)
  }

  deleteCollectiveReport = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteCollectiveReport({ id })
    res.status(200).json({ message: 'Deleted' })
  }

  // COLLECTIVE WEEKLY

  getCollectiveWeekly = async (req, res) => {
    const collectiveWeekly = await this.intermediateModel.getCollectiveWeekly()
    res.status(200).json(collectiveWeekly)
  }

  createCollectiveWeekly = async (req, res) => {
    const result = validateIntermediate(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newCollectiveWeekly = await this.intermediateModel.createCollectiveWeekly({ input: result.data })
    res.status(201).json(newCollectiveWeekly)
  }

  deleteCollectiveWeekly = async (req, res) => {
    const { id } = req.params
    await this.intermediateModel.deleteCollectiveWeekly({ id })
    res.status(200).json({ message: 'Deleted' })
  }
}
