import { pool } from '../../helpers/dataBaseConect.js'

export class IntermediateModel {
  // INDIVIDUALS

  // INDIVIDUALS MONITORING
  static async getIndividualMonitoring () {
    try {
      const result = await pool.query('SELECT id_individual, id_monitoring FROM individuals_monitoring')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createIndividualMonitoring ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_monitoring($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteIndividualMonitoring ({ id }) {
    try {
      const result = await pool.query('DELETE FROM individuals_monitoring WHERE id_monitoring = $1', [id])
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

  // COLLECTIVES MONITORING

  static async getCollectiveMonitoring () {
    try {
      const result = await pool.query('SELECT id_collective, id_monitoring FROM collectives_monitoring')
      return result.rows
    } catch (e) {
      throw new Error('Error to get information')
    }
  }

  static async createCollectiveMonitoring ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_monitoring($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async deleteCollectiveMonitoring ({ id }) {
    try {
      const result = await pool.query('DELETE FROM collectives_monitoring WHERE id_monitoring = $1', [id])
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
