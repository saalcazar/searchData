import multer from 'multer'
import path from 'path'
import fs from 'fs'

// Crear la carpeta si no existe
const uploadDir = path.resolve('uploads/photos')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir) // Carpeta donde se guardarán las fotos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${file.originalname}`
    cb(null, uniqueSuffix) // Nombre único para evitar colisiones
  }
})

// Filtro para asegurar que el archivo sea una imagen
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only image files are allowed'), false)
  }
  cb(null, true)
}

// Exportar el middleware configurado
export const upload = multer({ storage, fileFilter }).single('photo')

export const uploadWithLogging = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.error('Error en Multer:', err.message)
      return res.status(400).json({ error: err.message })
    }
    console.log('Archivo recibido:', req.file) // Aquí puedes ver el archivo que se envía
    next()
  })
}
