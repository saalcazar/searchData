import { pool } from '../../helpers/dataBaseConect.js'

export class IntermediateModel {
  // INDIVIDUALS

  // INDIVIDUALS REPORT
  static async getIndividualReport () {
    try {
      const result = await pool.query('SELECT id_individual, id_report FROM individuals_reports')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createIndividualReport ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_report($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteIndividualReport ({ id }) {
    try {
      const result = await pool.query('DELETE FROM individuals_reports WHERE id_report = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // INDIVIDUALS WEEKLY
  static async getIndividualWeekly () {
    try {
      const result = await pool.query('SELECT id_individual, id_weekly FROM individuals_weekly')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createIndividualWeekly ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_weekly($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteIndividualWeekly ({ id }) {
    try {
      const result = await pool.query('DELETE FROM individuals_weekly WHERE id_weekly = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // COLLECTIVES

  // COLLECTIVES REPORT

  static async getCollectiveReport () {
    try {
      const result = await pool.query('SELECT id_collective, id_report FROM collectives_reports')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createCollectiveReport ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_report($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteCollectiveReport ({ id }) {
    try {
      const result = await pool.query('DELETE FROM collectives_report WHERE id_report = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }

  // COLLECTIVES WEEKLY

  static async getCollectiveWeekly () {
    try {
      const result = await pool.query('SELECT id_collective, id_weekly FROM collectives_weekly')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createCollectiveWeekly ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_weekly($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteCollectiveWeekly ({ id }) {
    try {
      const result = await pool.query('DELETE FROM collectives_weekly WHERE id_weekly = $1', [id])
      return result.rows
    } catch (e) {
      throw new Error('Error to delete information')
    }
  }
}
