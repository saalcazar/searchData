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
export const upload = multer({ storage, fileFilter })

const uploadfileDir = path.resolve('uploads/photos')
if (!fs.existsSync(uploadfileDir)) {
  fs.mkdirSync(uploadfileDir, { recursive: true })
}

// Configuración de almacenamiento
const storageFile = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadfileDir) // Carpeta donde se guardarán las fotos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${file.originalname}`
    cb(null, uniqueSuffix) // Nombre único para evitar colisiones
  }
})

// Filtro para asegurar que el archivo sea una imagen
const fileDocFilter = (req, file, cb) => {
  const allowedTypes = ['apllication/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only image files are allowed'), false)
  }
  cb(null, true)
}

// Exportar el middleware configurado
export const uploadFile = multer({ storageFile, fileDocFilter })
