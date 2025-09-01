import { pool } from '../../helpers/dataBaseConect.js'

export class IndividualsReportModel {
  static async getMonitoring ({ id }) {
    try {
      const result = await pool.query('SELECT id_report, type_report, priority_report, confidentiality_report, num_report, date_report, link_report, id_user, issues FROM report_by_individual($1)', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to sen information')
    }
  }

  static async getWeekly ({ id }) {
    try {
      const result = await pool.query('SELECT id_weekly, num_weekly, date_weekly, link_weekly, id_user, issues FROM weekly_by_individual($1)', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to sen information')
    }
  }
}
