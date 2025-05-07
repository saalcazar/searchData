import { Router } from 'express'
import { IndividualsReportController } from '../../controllers/subjectsReport/individualsReport.js'

export const createIndividualsReportRouter = ({ individualsReportModel }) => {
  const individualsReportRouter = Router()
  const individualsReportController = new IndividualsReportController({ individualsReportModel })

  individualsReportRouter.get('/alert/:id', individualsReportController.getAlert)
  individualsReportRouter.get('/diary/:id', individualsReportController.getDiary)
  individualsReportRouter.get('/sunday/:id', individualsReportController.getSunday)
  individualsReportRouter.get('/monitoring/:id', individualsReportController.getMonitoring)
  individualsReportRouter.get('/weekly/:id', individualsReportController.getWeekly)
  individualsReportRouter.get('/ngoweekly/:id', individualsReportController.getNgoWeekly)

  return individualsReportRouter
}
