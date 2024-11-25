import { Router } from 'express'
import { CollectiveController } from '../../controllers/subjects/collectives.js'

export const createCollectiveRouter = ({ collectiveModel }) => {
  const collectiveRouter = Router()

  const individualController = new CollectiveController({ collectiveModel })

  collectiveRouter.get('/', individualController.getAll)
  collectiveRouter.post('/', individualController.create)
  collectiveRouter.delete('/:id', individualController.delete)
  collectiveRouter.put('/:id', individualController.update)

  return collectiveRouter
}
