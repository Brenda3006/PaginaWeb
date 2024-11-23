
/*const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).json({ error: 'Token requerido.' });
    }
  
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token inválido.' });
      }
      req.userId = decoded.id;
      next();
    });
  };
  
  // Ejemplo de ruta protegida
  app.get('/profile', verifyToken, async (req, res) => {
    try {
      const user = await prisma.usuario.findUnique({ where: { id: req.userId } });
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }
  
      res.status(200).json({ message: 'Perfil del usuario.', user });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el perfil.' });
    }
  });
  */