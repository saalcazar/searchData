import { pool } from '../../helpers/dataBaseConect.js'

export class IntermediateModel {
  static async createIndividualDiaries ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_diaries($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
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

  static async createIndividualAlert ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_alerts($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
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

  static async createIndividualNgoWeekly ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_ngo_weekly($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async createIndividualSunday ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_individuals_sundays($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  // COLLECTIVES
  static async createCollectiveDiaries ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_diaries($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
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

  static async createCollectiveAlert ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_alerts($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
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

  static async createCollectiveNgoWeekly ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_ngo_weekly($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async createCollectiveSunday ({ input }) {
    const { idSubject, idReport } = input

    try {
      const result = await pool.query('SELECT insert_collectives_sundays($1, $2)', [idSubject, idReport])
      return result.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
