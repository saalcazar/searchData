import { pool } from '../../helpers/dataBaseConect.js'

export class AssociationModel {
  static async getAll () {
    try {
      const allAssociations = await pool.query('SELECT id_association, association, id_individual, id_collective, id_user FROM associations')
      return allAssociations.rows
    } catch (e) {
      throw new Error('Error to send information')
    }
  }

  static async create ({ input }) {
    const {
      association,
      idIndividual,
      idCollective,
      idUser
    } = input

    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows
    try {
      await pool.query('SELECT create_association($1, $2, $3, $4, $5)', [uuid, association, idIndividual, idCollective, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_association, association, id_individual, id_collective, id_user FROM associations WHERE id_association = $1', [uuid])
    return result.rows
  }

  static async update ({ idAssociation, input }) {
    const {
      association,
      idIndividual,
      idCollective,
      idUser
    } = input

    try {
      await pool.query('SELECT update_association($1, $2, $3, $4, $5)', [idAssociation, association, idIndividual, idCollective, idUser])
    } catch (e) {
      throw new Error('Error to send information')
    }
    const result = await pool.query('SELECT id_association, association, id_individual, id_collective, id_user FROM associations WHERE id_association = $1', [idAssociation])
    return result.rows
  }

  static async delete ({ id }) {
    try {
      await pool.query('SELECT delete_association($1)', [id])
    } catch (e) {
      throw new Error('Error to send information')
    }
  }
}
