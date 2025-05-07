import { pool } from '../../helpers/dataBaseConect.js'

export class IndividualsReportModel {
  static async getAlert ({ id }) {
    try {
      const result = await pool.query('SELECT id_alert, type_alert, priority_alert, confidentiality_alert, num_alert, date_alert, issue_alert, link_alert, id_user FROM alert_by_individual($1)', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to sen information')
    }
  }

  static async getDiary ({ id }) {
    try {
      const result = await pool.query('SELECT id_diary, type_diary, priority_diary, confidentiality_diary, num_diary, date_diary, issue_diary, link_diary, id_user FROM diary_by_individual($1)', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to sen information')
    }
  }

  static async getSunday ({ id }) {
    try {
      const result = await pool.query('SELECT id_sunday, type_sunday, priority_sunday, confidentiality_sunday, num_sunday, date_sunday, issue_sunday, link_sunday, id_user FROM sunday_by_individual($1)', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to sen information')
    }
  }

  static async getMonitoring ({ id }) {
    try {
      const result = await pool.query('SELECT id_monitoring, type_monitoring, priority_monitoring, confidentiality_monitoring, num_monitoring, date_monitoring, link_monitoring, id_user, issues FROM monitoring_by_individual($1)', [id])
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

  static async getNgoWeekly ({ id }) {
    try {
      const result = await pool.query('SELECT id_ngo_weekly, num_ngo_weekly, date_ngo_weekly, link_ngo_weekly, id_user, issues FROM ngo_weekly_by_individual($1)', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to sen information')
    }
  }
}
