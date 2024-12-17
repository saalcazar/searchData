import pg from 'pg'

const { Pool } = pg

const config = {
  host: 'autorack.proxy.rlwy.net',
  port: 15053,
  database: 'railway',
  user: 'postgres',
  password: 'sxTUuxBHgdihSvYvcTFGTIMADQPkRWLE'
}

export const pool = new Pool(config)
