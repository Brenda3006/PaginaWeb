import { PrismaClient } from "@prisma/client"

app.post('/register', async (req, res) => {
    const { nombre, apellido, email, contra, genero, tipoUser, fechaN, estatus } = req.body;
  
    try {
      // Verifica si el usuario ya existe
      const existingUser = await prisma.usuario.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'El usuario ya está registrado.' });
      }
  
      // Hash de la contraseña
      const hashedPassword = await bcrypt.hash(contra, 10);
  
      // Crear nuevo usuario
      const newUser = await prisma.usuario.create({
        data: {
          nombre,
          apellido,
          email,
          contra: hashedPassword,
          genero,
          tipoUser,
          fechaN: new Date(fechaN),
          estatus,
        },
      });
  
      res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar el usuario.' });
    }
  });
  