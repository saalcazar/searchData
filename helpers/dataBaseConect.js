import pg from 'pg'

const { Pool } = pg

const config = {
  host: 'localhost',
  port: 5432,
  database: 'search',
  user: 'data',
  password: 'a1b2c3d4c0'
}

export const pool = new Pool(config)
