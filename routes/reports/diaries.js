import { Router } from 'express'
import { DiaryController } from '../../controllers/reports/diaries.js'
import { uploadFile } from '../../middlewares/multerConfig.js'

export const createDiaryRouter = ({ diaryModel }) => {
  const diaryRouter = Router()

  const diaryController = new DiaryController({ diaryModel })

  diaryRouter.get('/', diaryController.getAll)
  diaryRouter.post('/', uploadFile.single('report'), diaryController.create)
  diaryRouter.delete('/:id', diaryController.delete)
  diaryRouter.put('/:id', diaryController.update)

  return diaryRouter
}
