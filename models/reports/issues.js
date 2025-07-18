import { pool } from '../../helpers/dataBaseConect.js'

export class IssueModel {
  static async getAll () {
    try {
      const issues = await pool.query('SELECT id_issues_report, issue_report, tags_report, id_report FROM issues_report')
      return issues.rows
    } catch (e) {
      console.error('error', e)
      throw new Error('Error to send information')
    }
  }

  static async getById ({ id }) {
    try {
      const issues = await pool.query('SELECT id_issues_report, issue_report, tags_report, id_report FROM issues_report WHERE id_report = $1', [id])
      return issues.rows
    } catch (e) {
      console.error('error', e)
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      issueReport,
      tagsReport,
      idReport
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      const issue = await pool.query('SELECT create_issues_report ($1, $2, $3, $4)', [uuid, issueReport, tagsReport, idReport])
      return issue.rows
    } catch (e) {
      console.error('error', e)
      throw new Error('Error to send information')
    }
  }

  static async update ({ idIssueReport, input }) {
    const {
      issueReport,
      tagsIssue,
      idReport
    } = input

    try {
      await pool.query('SELECT update_issues_report($1, $2, $3, $4)', [idIssueReport, issueReport, tagsIssue, idReport])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_issues_report, issue_report, tags_report, id_report FROM issues_report WHERE id_issues_report = $1', [idIssueReport])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      const issueDelete = await pool.query('SELECT delete_issues_report ($1)', [id])
      return issueDelete.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
