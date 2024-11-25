import express from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createAreaRouter } from './routes/users/areas.js'
import { createRegionRouter } from './routes/users/regions.js'
import { createRoleRouter } from './routes/users/roles.js'
import { createUserRouter } from './routes/users/users.js'
import { createIndividualRouter } from './routes/subjects/individuals.js'
import { createCollectiveRouter } from './routes/subjects/collectives.js'
import { createAssociationRouter } from './routes/subjects/associations.js'
import { createSpeachRouter } from './routes/subjects/speachs.js'
import { createWorkRouter } from './routes/subjects/works.js'
import { createDiaryRouter } from './routes/reports/diaries.js'

export const createApp = ({
  areaModel,
  regionModel,
  roleModel,
  userModel,
  individualModel,
  collectiveModel,
  associationModel,
  speachModel,
  workModel,
  diaryModel
}) => {
  const PORT = process.env.PORT ?? 1234
  const app = express()
  app.disable('x-powered-by')
  app.use(express.json())
  app.use(corsMiddleware())

  // ROUTES
  app.use('/areas', createAreaRouter({ areaModel }))
  app.use('/regions', createRegionRouter({ regionModel }))
  app.use('/roles', createRoleRouter({ roleModel }))
  app.use('/users', createUserRouter({ userModel }))
  app.use('/individuals', createIndividualRouter({ individualModel }))
  app.use('/collectives', createCollectiveRouter({ collectiveModel }))
  app.use('/associations', createAssociationRouter({ associationModel }))
  app.use('/speachs', createSpeachRouter({ speachModel }))
  app.use('/works', createWorkRouter({ workModel }))
  app.use('/diaries', createDiaryRouter({ diaryModel }))

  app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
  })

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}
