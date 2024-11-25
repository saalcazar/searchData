import { createApp } from './app.js'
import { DiaryModel } from './models/reports/diary.js'
import { AssociationModel } from './models/subjects/association.js'
import { CollectiveModel } from './models/subjects/collective.js'
import { IndividualModel } from './models/subjects/individual.js'
import { SpeachModel } from './models/subjects/speach.js'
import { WorkModel } from './models/subjects/work.js'
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
  collectiveModel: CollectiveModel,
  associationModel: AssociationModel,
  speachModel: SpeachModel,
  workModel: WorkModel,
  diaryModel: DiaryModel
})
