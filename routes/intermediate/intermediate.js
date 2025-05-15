import { Router } from 'express'
import { IntermediateController } from '../../controllers/intermediate/intermediate.js'

export const createIntermediateRouter = ({ intermediateModel }) => {
  const intermediateRouter = Router()

  const intermediateController = new IntermediateController({ intermediateModel })
  // INDIVIDUALS REPORT
  intermediateRouter.get('/individualReport', intermediateController.getIndividualReport)
  intermediateRouter.post('/individualReport', intermediateController.createIndividualReport)
  intermediateRouter.delete('/individualReport/:id', intermediateController.deleteIndividualReport)
  // INDIVIDUALS WEEKLY
  intermediateRouter.get('/individualWeekly', intermediateController.getIndividualWeekly)
  intermediateRouter.post('/individualWeekly', intermediateController.createIndividualWeekly)
  intermediateRouter.delete('/individualWeekly/:id', intermediateController.deleteIndividualWeekly)
  // COLLECTIVES REPORT
  intermediateRouter.get('/collectiveReport', intermediateController.getCollectiveReport)
  intermediateRouter.post('/collectiveReport', intermediateController.createCollectiveReport)
  intermediateRouter.delete('/collectiveReport/:id', intermediateController.deleteCollectiveReport)
  // COLLECTIVES WEEKLY
  intermediateRouter.get('/collectiveWeekly', intermediateController.getCollectiveWeekly)
  intermediateRouter.post('/collectiveWeekly', intermediateController.createCollectiveWeekly)
  intermediateRouter.delete('/collectiveWeekly/:id', intermediateController.deleteCollectiveWeekly)

  return intermediateRouter
}
