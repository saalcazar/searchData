/* eslint-disable camelcase */
import pg from 'pg'
const { Pool } = pg

const config = {
  host: 'localhost',
  port: 5432,
  database: 'movies',
  user: 'postgres',
  password: '932684'
}

const pool = new Pool(config)

export class MovieModel {
  // GET ALL - BY GENRE
  static async getAll ({ genre }) {
    // GENRE
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase()

      const genres = await pool.query('SELECT id_genre AS id, genre FROM genres WHERE LOWER(genre) = $1', [lowerCaseGenre])

      if (genres.length === 0) return []
      const [{ id }] = genres.rows

      const allMovies = await pool.query('SELECT id, title, year, director, duration, poster, rate FROM movies')

      const moviesId = await pool.query('SELECT id_movie FROM movie_genres WHERE id_genre = $1', [id])
      const mapMoviesId = moviesId.rows.map(movieId => movieId.id_movie)
      const moviesByGenre = allMovies.rows.filter(movie => mapMoviesId.includes(movie.id))

      const moviesByGenreMap = moviesByGenre.map(movieId => movieId.id)
      const genreId = await pool.query('SELECT mg.id_movie, g.genre FROM movie_genres mg INNER JOIN genres g ON mg.id_genre = g.id_genre WHERE mg.id_movie = ANY($1)', [moviesByGenreMap])
      const genresByMovie = genreId.rows.reduce((acc, { id_movie, genre }) => {
        if (!acc[id_movie]) acc[id_movie] = []
        acc[id_movie].push(genre)
        return acc
      }, {})

      return moviesByGenre.map(movie => ({
        ...movie,
        genres: genresByMovie[movie.id] || []
      }))
    }

    // GETALL
    const result = await pool.query('SELECT id, title, year, director, duration, poster, rate FROM movies')

    const resultMap = result.rows.map(movieId => movieId.id)
    const genreId = await pool.query('SELECT mg.id_movie, g.genre FROM movie_genres mg INNER JOIN genres g ON mg.id_genre = g.id_genre WHERE mg.id_movie = ANY($1)', [resultMap])

    const genresByMovie = genreId.rows.reduce((acc, { id_movie, genre }) => {
      if (!acc[id_movie]) acc[id_movie] = []
      acc[id_movie].push(genre)
      return acc
    }, {})

    return result.rows.map(movie => ({
      ...movie,
      genres: genresByMovie[movie.id] || []
    }))
  }

  // GETBYID
  static async getById ({ id }) {
    const result = await pool.query(
      `
      SELECT 
        m.id,
        m.title,
        m.year,
        m.director,
        m.duration,
        m.poster,
        m.rate,
        ARRAY_AGG(g.genre) AS genres
      FROM 
        movies m
      LEFT JOIN 
        movie_genres mg ON m.id = mg.id_movie
      LEFT JOIN 
        genres g ON mg.id_genre = g.id_genre
      WHERE 
        m.id = $1
      GROUP BY 
        m.id
      `,
      [id]
    )
    if (!result) return null
    return result.rows[0]
  }

  // CREATE
  static async create ({ input }) {
    const {
      title,
      year,
      director,
      duration,
      rate,
      poster,
      genre // Array de géneros
    } = input

    // Generar un UUID para la nueva película
    const uuidResult = await pool.query('SELECT gen_random_uuid() uuid')
    const [{ uuid }] = uuidResult.rows

    try {
      // Insertar la película en la tabla `movies`
      await pool.query(
        'INSERT INTO movies (id, title, year, director, duration, poster, rate) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [uuid, title, year, director, duration, poster, rate]
      )

      // Manejar los géneros
      const genreIds = []
      for (const genreName of genre) {
        // Verificar si el género ya existe
        const genreResult = await pool.query(
          'SELECT id_genre FROM genres WHERE LOWER(genre) = LOWER($1)',
          [genreName]
        )

        let genreId
        if (genreResult.rows.length > 0) {
          // Si existe, obtener su ID
          genreId = genreResult.rows[0].id_genre
        } else {
          // Si no existe, crearlo y obtener su ID
          const newGenre = await pool.query(
            'INSERT INTO genres (genre) VALUES ($1) RETURNING id_genre',
            [genreName]
          )
          genreId = newGenre.rows[0].id_genre
        }
        genreIds.push(genreId)

        // Insertar en la tabla `movie_genres` para asociar la película con el género
        await pool.query(
          'INSERT INTO movie_genres (id_movie, id_genre) VALUES ($1, $2)',
          [uuid, genreId]
        )
      }
    } catch (e) {
      throw new Error('Error to send information')
    }
    // Obtener la película con los géneros para devolverla
    const movie = await pool.query(
      `
      SELECT 
        m.id,
        m.title,
        m.year,
        m.director,
        m.duration,
        m.poster,
        m.rate,
        ARRAY_AGG(g.genre) AS genres
      FROM 
        movies m
      LEFT JOIN 
        movie_genres mg ON m.id = mg.id_movie
      LEFT JOIN 
        genres g ON mg.id_genre = g.id_genre
      WHERE 
        m.id = $1
      GROUP BY 
        m.id
      `,
      [uuid]
    )

    return movie.rows[0]
  }

  // DELETE
  static async delete ({ id }) {
    await pool.query('DELETE FROM movies WHERE id = $1', [id])
  }

  // UPDATE
  static async update ({ id, input }) {
    const fields = Object.keys(input).filter(field => field !== 'genre')
    if (fields.length === 0) {
      return 'No fields to update'
    }
    const set = fields.map((field, index) => `${field} = $${index + 1}`).join(', ')
    const values = fields.map(field => input[field])
    await pool.query(`UPDATE movies SET ${set} WHERE id = $${fields.length + 1}`, [...values, id])

    if (input.genre) {
      // Eliminar géneros antiguos relacionados con esta película
      await pool.query('DELETE FROM movie_genres WHERE id_movie = $1', [id])

      // Insertar los nuevos géneros
      for (const genre of input.genre) {
        const genreResult = await pool.query('SELECT id_genre FROM genres WHERE LOWER(genre) = $1', [genre])
        console.log(genreResult.rows)
        if (genreResult.rows.length > 0) {
          const genreId = genreResult.rows[0].id_genre
          await pool.query('INSERT INTO movie_genres (id_movie, id_genre) VALUES ($1, $2)', [id, genreId])
        }
      }
    }

    const movie = await pool.query('SELECT id, title, year, director, duration, poster, rate FROM movies WHERE id = $1', [id])

    return movie.rows[0]
  }
}
