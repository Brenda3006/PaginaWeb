import multer from 'multer';
import path from 'path';

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Nombre único para el archivo
  },
});

// Inicializar Multer
const upload = multer({ storage });

export default upload;

// Configuración del almacenamiento de Multer
/*const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Genera un nombre único
  },
});

// Filtro de archivos (opcional, para permitir solo imágenes)
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Acepta el archivo
  } else {
    cb(new Error('Solo se permiten imágenes'), false); // Rechaza el archivo
  }
};

const upload = multer({ storage, fileFilter });
export default upload;
*/