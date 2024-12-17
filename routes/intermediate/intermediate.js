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

  intermediateRouter.post('/collectiveDiaries', intermediateController.createCollectiveDiaries)
  intermediateRouter.post('/collectiveMonitoring', intermediateController.createCollectiveMonitoring)
  intermediateRouter.post('/collectiveAlert', intermediateController.createCollectiveAlert)
  intermediateRouter.post('/collectiveWeekly', intermediateController.createCollectiveWeekly)
  intermediateRouter.post('/collectiveNgoWeekly', intermediateController.createCollectiveNgoWeekly)
  intermediateRouter.post('/collectiveSunday', intermediateController.createCollectiveSunday)

  return intermediateRouter
}
