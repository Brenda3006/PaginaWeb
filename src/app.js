//se utiliza para un mensaje corto en la consola 
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.routes.js'
import path from 'path'
import { fileURLToPath } from 'url';

import { MongoClient, GridFSBucket } from 'mongodb';

// Define __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Conexión a MongoDB
const client = new MongoClient('mongodb+srv://channelfandb:1234@cluster0.radbvnj.mongodb.net/channelfandb?retryWrites=true&w=majority');
const db = client.db('channelfandb');
const bucket = new GridFSBucket(db, { bucketName: 'images' });

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));


// Rutas de autenticación
app.use("/api",authRoutes);
app.use(express.json());

// Hacer pública la carpeta 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Ruta para obtener archivos (imágenes) desde GridFS
app.get('/files/:id', async (req, res) => {
    try {
      const { id } = req.params;  // ID del archivo de la URL
      const downloadStream = bucket.openDownloadStream(new MongoClient.ObjectID(id));
  
      // Obtener los metadatos del archivo para obtener el tipo de contenido
      const file = await bucket.find({ _id: new MongoClient.ObjectID(id) }).toArray();
      const contentType = file[0]?.contentType || 'application/octet-stream';  // Tipo de archivo (por defecto 'binary' si no se encuentra)
  
      // Establecer el encabezado Content-Type basado en el tipo del archivo
      res.set('Content-Type', contentType);
  
      // Piping de la imagen al cliente
      downloadStream.pipe(res);
      downloadStream.on('error', () => {
        res.status(404).send('No se encontró la imagen');
      });
    } catch (error) {
      res.status(500).send('Error al obtener la imagen');
    }
  });

export default app;