import { Router } from 'express'
import { AlertController } from '../../controllers/reports/alerts.js'

export const createAlertRouter = ({ alertModel }) => {
  const alertRouter = Router()

  const alertController = new AlertController({ alertModel })

  alertRouter.get('/', alertController.getAll)
  alertRouter.post('/', alertController.create)
  alertRouter.delete('/:id', alertController.delete)
  alertRouter.put('/:id', alertController.update)

  return alertRouter
}
