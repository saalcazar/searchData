import { Router } from 'express'
import { IndividualController } from '../../controllers/subjects/individuals.js'
import { uploadWithLogging } from '../../middlewares/multerConfig.js'

export const createIndividualRouter = ({ individualModel }) => {
  const individualRouter = Router()

  const individualController = new IndividualController({ individualModel })

  individualRouter.get('/', individualController.getAll)
  individualRouter.post('/', uploadWithLogging, individualController.create)
  individualRouter.delete('/:id', individualController.delete)
  individualRouter.put('/:id', individualController.update)

  return individualRouter
}
