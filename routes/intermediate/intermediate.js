import { Router } from 'express'
import { IntermediateController } from '../../controllers/intermediate/intermediate.js'

export const createIntermediateRouter = ({ intermediateModel }) => {
  const intermediateRouter = Router()

  const intermediateController = new IntermediateController({ intermediateModel })

  intermediateRouter.post('/individualDiaries', intermediateController.createIndividualDiaries)
  intermediateRouter.post('/individualMonitoring', intermediateController.createIndividualMonitoring)
  intermediateRouter.post('/individualAlert', intermediateController.createIndividualAlert)
  intermediateRouter.post('/individualWeekly', intermediateController.createIndividualWeekly)
  intermediateRouter.post('/individualNgoWeekly', intermediateController.createIndividualNgoWeekly)
  intermediateRouter.post('/individualSunday', intermediateController.createIndividualSunday)

  intermediateRouter.post('/collectivesDiaries', intermediateController.createCollectiveDiaries)
  intermediateRouter.post('/collectivesMonitoring', intermediateController.createCollectiveMonitoring)
  intermediateRouter.post('/collectivesAlert', intermediateController.createCollectiveAlert)
  intermediateRouter.post('/collectivesWeekly', intermediateController.createCollectiveWeekly)
  intermediateRouter.post('/collectivesNgoWeekly', intermediateController.createCollectiveNgoWeekly)
  intermediateRouter.post('/collectivesSunday', intermediateController.createCollectiveSunday)

  return intermediateRouter
}
