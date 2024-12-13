import { Router } from 'express'
import { SpeachController } from '../../controllers/subjects/speachs.js'
import { uploadMedia } from '../../middlewares/multerMediaConfig.js'

export const createSpeachRouter = ({ speachModel }) => {
  const speachRouter = Router()

  const speachController = new SpeachController({ speachModel })

  speachRouter.get('/', speachController.getAll)
  speachRouter.post('/', uploadMedia.single('media'), speachController.create)
  speachRouter.delete('/:id', speachController.delete)
  speachRouter.put('/:id', speachController.update)

  return speachRouter
}
