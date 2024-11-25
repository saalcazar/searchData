import { Router } from 'express'
import { CollectiveController } from '../../controllers/subjects/collectives.js'

export const createCollectiveRouter = ({ collectiveModel }) => {
  const collectiveRouter = Router()

  const collectiveController = new CollectiveController({ collectiveModel })

  collectiveRouter.get('/', collectiveController.getAll)
  collectiveRouter.post('/', collectiveController.create)
  collectiveRouter.delete('/:id', collectiveController.delete)
  collectiveRouter.put('/:id', collectiveController.update)

  return collectiveRouter
}
