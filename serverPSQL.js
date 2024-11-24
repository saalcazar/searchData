import { createApp } from './app.js'
import { AreaModel } from './models/users/area.js'
import { RegionModel } from './models/users/region.js'
import { RoleModel } from './models/users/role.js'
createApp({
  areaModel: AreaModel,
  regionModel: RegionModel,
  roleModel: RoleModel
})
