import { Router } from 'express'
import { MonitoringController } from '../../controllers/reports/monitoring.js'

export const createMonitoringRouter = ({ monitoringModel }) => {
  const monitoringRouter = Router()

  const monitoringController = new MonitoringController({ monitoringModel })

  monitoringRouter.get('/', monitoringController.getAll)
  monitoringRouter.post('/', monitoringController.create)
  monitoringRouter.delete('/:id', monitoringController.delete)
  monitoringRouter.put('/:id', monitoringController.update)

  return monitoringRouter
}
