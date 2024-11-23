// src/controllers/auth.controllers.js
import { PrismaClient } from '@prisma/client';
import { uploadImageToGridFS } from '../imageService.js';
import bcrypt from 'bcrypt';
import fs from 'fs/promises';

const prisma = new PrismaClient();

export const registrarUsuario = async (req, res) => {
  try {
    console.log(req.file); // Información del archivo subido por Multer
    console.log(req.body); // Información enviada en el formulario

    const { nombre, apellido, fechaN, email, contra, genero, tipoUser, estatus } = req.body;
    const imagen = req.file;

    // Validación de campos obligatorios
    if (!nombre || !apellido || !email || !contra || !fechaN) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }

    // Validación de la fecha
    const fecha = new Date(fechaN);
    if (isNaN(fecha)) {
      return res.status(400).json({ message: 'Fecha de nacimiento inválida' });
    }

    // Verificar si el usuario ya existe
    const usuarioExistente = await prisma.usuario.findUnique({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Subida de imagen a GridFS (si se envió un archivo)
    let imageUrl = '';
    if (imagen) {
      const imagePath = imagen.path; // Ruta del archivo temporal
      imageUrl = await uploadImageToGridFS(imagePath, `${nombre}_${Date.now()}.jpg`);
      await fs.unlink(imagePath); // Eliminar archivo temporal
    }
    
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contra, 10);

    // Crear un nuevo usuario con Prisma
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        apellido,
        fechaN: fecha,
        email,
        contra: hashedPassword,
        genero,
        tipoUser: tipoUser || 'cliente', // Valor por defecto
        estatus: estatus || 'Activo',   // Valor por defecto
        imgUser: imageUrl, // URL de la imagen subida
      },
    });

    // Respuesta de éxito
    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      usuario: nuevoUsuario,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al registrar el usuario',
      error: error.message,
    });
  }
};
