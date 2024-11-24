import { pool } from '../../helpers/dataBaseConect.js'

export class AreaModel {
  static async getAll () {
    try {
      const allAreas = await pool.query('SELECT id_area, create_area, name_area FROM areas')
      return allAreas.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const { nameArea } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    const idSuperUserResult = await pool.query('SELECT id FROM super_user')
    const [{ id }] = idSuperUserResult.rows
    try {
      await pool.query('SELECT create_area($1, $2, $3)', [uuid, nameArea, id])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_area, name_area FROM areas WHERE id_area = $1', [uuid])
    return result.rows
  }

  static async update ({ input }) {
    const {
      idArea,
      area
    } = input

    const idSuperUserResult = await pool.query('SELECT id FROM super_user')
    const [{ id }] = idSuperUserResult
    try {
      await pool.query('SELECT update_area($1, $2, $3)', [idArea, area, id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_area($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
