import { validateDiary } from '../../schemas/reports/diaries.js'

export class DiaryController {
  constructor ({ diaryModel }) {
    this.diaryModel = diaryModel
  }

  getAll = async (req, res) => {
    const diaries = await this.diaryModel.getAll()
    res.status(201).json(diaries)
  }

  create = async (req, res) => {
    const file = req.file
    const body = req.body

    const input = {
      ...body,
      linkDiary: file ? `/uploads/docs/${file.filename}` : 'Ruta por defecto'
    }

    const result = validateDiary(input)
    if (!result.success) {
      console.error(result.error)
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newDiary = await this.diaryModel.create({ input: result.data })
    res.status(201).json(newDiary)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const result = await this.diaryModel.delete({ id })
    if (result === false) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    res.status(201).json('Diary deleted')
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validateDiary(req.body)
    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newDiary = await this.diaryModel.update({ idDiary: id, input: result.data })
    res.status(201).json(newDiary)
  }
}
