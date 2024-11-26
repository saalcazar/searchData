import { Router } from 'express'
import { SundayController } from '../../controllers/reports/sundays.js'

export const createSundayRouter = ({ sundayModel }) => {
  const sundayRouter = Router()

  const sundayController = new SundayController({ sundayModel })

  sundayRouter.get('/', sundayController.getAll)
  sundayRouter.post('/', sundayController.create)
  sundayRouter.delete('/:id', sundayController.delete)
  sundayRouter.put('/:id', sundayController.update)

  return sundayRouter
}
