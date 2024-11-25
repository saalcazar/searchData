import { createApp } from './app.js'
import { CollectiveModel } from './models/subjects/collective.js'
import { IndividualModel } from './models/subjects/individual.js'
import { AreaModel } from './models/users/area.js'
import { RegionModel } from './models/users/region.js'
import { RoleModel } from './models/users/role.js'
import { UserModel } from './models/users/user.js'
createApp({
  areaModel: AreaModel,
  regionModel: RegionModel,
  roleModel: RoleModel,
  userModel: UserModel,
  individualModel: IndividualModel,
  collectiveModel: CollectiveModel
})
