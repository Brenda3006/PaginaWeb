// src/routes/auth.routes.js
import { Router } from 'express';
import { registrarUsuario } from '../controllers/auth.controllers.js';
import upload from '../config/multer.js'; // Importa la configuración de Multer

const router = Router();

// Ruta para registrar un usuario con imagen
router.post('/usuarios', upload.single('imagen'), registrarUsuario);

export default router;