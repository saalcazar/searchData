import { Router } from 'express'
import { NgoWeeklyController } from '../../controllers/reports/ngoWeekly.js'

export const createNgoWeeklyRouter = ({ ngoWeeklyModel }) => {
  const ngoWeeklyRouter = Router()

  const ngoWeeklyController = new NgoWeeklyController({ ngoWeeklyModel })

  ngoWeeklyRouter.get('/', ngoWeeklyController.getAll)
  ngoWeeklyRouter.post('/', ngoWeeklyController.create)
  ngoWeeklyRouter.delete('/:id', ngoWeeklyController.delete)
  ngoWeeklyRouter.put('/:id', ngoWeeklyController.update)

  return ngoWeeklyRouter
}
