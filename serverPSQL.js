import { createApp } from './app.js'
import { AssociationModel } from './models/subjects/association.js'
import { CollectiveModel } from './models/subjects/collective.js'
import { IndividualModel } from './models/subjects/individual.js'
import { SpeachModel } from './models/subjects/speach.js'
import { WorkModel } from './models/subjects/work.js'
import { AreaModel } from './models/users/area.js'
import { RegionModel } from './models/users/region.js'
import { RoleModel } from './models/users/role.js'
import { UserModel } from './models/users/user.js'
import { ReportModel } from './models/reports/reports.js'
import { WeeklyModel } from './models/reports/weekly.js'
import { LoginModel } from './models/login/login.js'
import { IntermediateModel } from './models/intermediate/intermediate.js'
import { IssueModel } from './models/reports/issues.js'
import { SubjectModel } from './models/subjects/subject.js'
import { AdminSubjectModel } from './models/admin/subjects.js'
import { AdminReportModel } from './models/admin/reports.js'
import { IndividualsReportModel } from './models/subjectsReport/individualsReport.js'
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
  reportModel: ReportModel,
  weeklyModel: WeeklyModel,
  loginModel: LoginModel,
  intermediateModel: IntermediateModel,
  issueModel: IssueModel,
  subjectModel: SubjectModel,
  adminSubjectModel: AdminSubjectModel,
  adminReportModel: AdminReportModel,
  individualsReportModel: IndividualsReportModel
})
