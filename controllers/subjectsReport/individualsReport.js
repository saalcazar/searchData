export class IndividualsReportController {
  constructor ({ individualsReportModel }) {
    this.individualsReportModel = individualsReportModel
  }

  getAlert = async (req, res) => {
    const { id } = req.params
    const result = await this.individualsReportModel.getAlert({ id })
    res.status(201).json(result)
  }

  getDiary = async (req, res) => {
    const { id } = req.params
    const result = await this.individualsReportModel.getDiary({ id })
    res.status(201).json(result)
  }

  getSunday = async (req, res) => {
    const { id } = req.params
    const result = await this.individualsReportModel.getSunday({ id })
    res.status(201).json(result)
  }

  getMonitoring = async (req, res) => {
    const { id } = req.params
    const result = await this.individualsReportModel.getMonitoring({ id })
    res.status(201).json(result)
  }

  getWeekly = async (req, res) => {
    const { id } = req.params
    const result = await this.individualsReportModel.getWeekly({ id })
    res.status(201).json(result)
  }

  getNgoWeekly = async (req, res) => {
    const { id } = req.params
    const result = await this.individualsReportModel.getNgoWeekly({ id })
    res.status(201).json(result)
  }
}
