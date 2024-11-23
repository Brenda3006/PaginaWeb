import app from './app.js'
//import express from 'express'

import { PrismaClient } from "@prisma/client";
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

//const app = express();
const prisma = new PrismaClient();

//app.use(express.json());
app.get('/', async (req, res) => {
    try {
      const usuarios = await prisma.usuario.findMany(); // Consulta en MongoDB
      res.status(200).json(usuarios);
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
      res.status(500).json({ error: 'Error al conectar a la base de datos' });
    }
  });
// Inicia el servidor
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

//const SECRET_KEY = '8186582177'; // Cambia esto por una clave segura
// se levanta servidor en host 3mil 