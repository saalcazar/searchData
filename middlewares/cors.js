import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:5173',
  'http://192.168.40.108:5173',
  'http://192.168.0.16:5173',
  'http://192.168.0.16:5174',
  'http://localhost:1234',
  'http://192.168.40.108:1234',
  'http://192.168.0.16:1234',
  'https://searchdata.bo'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  },
  credentials: true
})
