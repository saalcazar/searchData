import { Router } from 'express'
import { IndividualController } from '../../controllers/subjects/individuals.js'
import { upload } from '../../middlewares/multerConfig.js'

export const createIndividualRouter = ({ individualModel }) => {
  const individualRouter = Router()

  const individualController = new IndividualController({ individualModel })

  individualRouter.get('/', individualController.getAll)
  individualRouter.post('/', individualController.create)
  individualRouter.delete('/:id', upload.single('photo'), individualController.delete)
  individualRouter.put('/:id', individualController.update)

  return individualRouter
}
