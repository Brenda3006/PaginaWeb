app.post('/login', async (req, res) => {
    const { email, contra } = req.body;
  
    try {
      // Verifica si el usuario existe
      const user = await prisma.usuario.findUnique({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }
  
      // Verifica la contraseña
      const isValidPassword = await bcrypt.compare(contra, user.contra);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Contraseña incorrecta.' });
      }
  
      // Genera un token
      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
  
      res.status(200).json({ message: 'Login exitoso.', token });
    } catch (error) {
      res.status(500).json({ error: 'Error en el servidor.' });
    }
  });
  