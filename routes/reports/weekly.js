import { Router } from 'express'
import { WeeklyController } from '../../controllers/reports/weekly.js'

export const createWeeklyRouter = ({ weeklyModel }) => {
  const weeklyRouter = Router()

  const weeklyController = new WeeklyController({ weeklyModel })

  weeklyRouter.get('/', weeklyController.getAll)
  weeklyRouter.post('/', weeklyController.create)
  weeklyRouter.delete('/:id', weeklyController.delete)
  weeklyRouter.put('/:id', weeklyController.update)

  return weeklyRouter
}
