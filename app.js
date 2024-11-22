import express from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createAreaRouter } from './routes/users/areas.js'
import { createRegionRouter } from './routes/users/regions.js'
import { createRoleRouter } from './routes/users/roles.js'

export const createApp = ({
  areaModel,
  regionModel,
  roleModel
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

  app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
  })

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}
