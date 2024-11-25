import { pool } from '../../helpers/dataBaseConect.js'

export class speachModel {
  static async getAll () {
    try {
      const allSpeachs = await pool.query('SELECT id_speach, speach, id_individual, id_user FROM speachs')
      return allSpeachs.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
