import { useState, useEffect } from 'react';
import userImage from './img/pelis.png';
import styles from "./css/Registro.module.css";
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaN: '',
    email: '',
    contra: '',
    genero: '',
    imagen: null, // Inicia como null
    tipoUser: 'cliente',
    estatus: 'Activo',
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, imagen: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear objeto FormData
    const formDataObj = new FormData();
    formDataObj.append('imagen', formData.imagen); // Agregar la imagen al FormData

    // Agregar el resto de los datos
    Object.keys(formData).forEach((key) => {
      if (key !== 'imagen') {
        formDataObj.append(key, formData[key]);
      }
    });

    // Validar la fecha
    const fechaConvertida = new Date(formData.fechaN);
    if (isNaN(fechaConvertida)) {
      alert('La fecha proporcionada no es válida.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        body: formDataObj, // Enviar el FormData
      });

      if (response.ok) {
        alert('Usuario registrado exitosamente');
        setFormData({
          nombre: '',
          apellido: '',
          fechaN: '',
          email: '',
          contra: '',
          genero: '',
          imagen: null,
          tipoUser: 'cliente',
          estatus: 'Activo',
        });
        setPreviewImage(null);
      } else {
        alert('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
      alert('Hubo un problema al intentar registrar el usuario');
    }
  };
/*const Registro = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaN: '',
    email: '',
    contra: '',
    genero: '',
    imagen: '',
    tipoUser: 'cliente', // Valor predeterminado
    estatus: 'Activo',   // Valor predeterminado
  });

  const [previewImage, setPreviewImage] = useState(null); // Estado para la previsualización de imagen

  // Función para manejar el cambio de datos en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,  // Mantén todos los valores anteriores
      [name]: value,  // Actualiza solo el valor del campo que cambió
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, imagen: file });
      setPreviewImage(URL.createObjectURL(file)); // Genera la URL de previsualización
    }
  };

  useEffect(() => {
    // Limpia la URL temporal cuando el componente se desmonta o cambia la imagen
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const formDataObj = new FormData();
    formDataObj.append('imagen', formData.imagen); // Clave debe coincidir con 'imagen'
    Object.keys(formData).forEach((key) => {
      if (key !== 'imagen') {
        formDataObj.append(key, formData[key]);
      }
    });

    // Verifica que la imagen exista antes de enviarla
    if (formData.imagen) {
      formDataObj.append('imagen', formData.imagen);
    }


    // Convertir fechaN a un objeto Date
    const fechaConvertida = new Date(formData.fechaN);

    // Verificar si la fecha es válida
    if (isNaN(fechaConvertida)) {
      alert('La fecha proporcionada no es válida.');
      return;
    }

    // Crear un objeto con los datos que se enviarán al backend
    const datosFormulario = {
      ...formData,
      fechaN: fechaConvertida,  // Convertir fechaN a Date
      tipoUser: 'cliente',
      estatus: 'activo',  // Agregar estatus con valor 'activo'
    };

    // Ver los datos del formulario en la consola
    console.log("Datos del formulario:", datosFormulario);
    console.log("Form data obj", formDataObj);

    // Enviar los datos del formulario al backend
    try {
      const response = await fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        body: formDataObj, // Envía FormData directamente
      });
      if (response.ok) {
        alert('Usuario registrado exitosamente');
        setFormData({ // Limpiar el formulario después de registrar
          nombre: '',
          apellido: '',
          fechaN: '',
          email: '',
          contra: '',
          genero: '',
          imagen: null,
        });
      } else {
        alert('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
      alert('Hubo un problema al intentar registrar el usuario');
    }
  };
*/
  return (
    <div className="hola">
      <Navbar />
      <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 col-xl-4">
          <div className="card text-center">
            <div className="card-header">Registro</div>
            <div className="card-body">
              {/* Formulario de Registro */}
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Nombre:</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Apellido:</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellidos"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Fecha de Nacimiento:</span>
                  <input
                    type="date"
                    className="form-control"
                    name="fechaN"
                    value={formData.fechaN}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Email:</span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Contraseña:</span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="contra"
                    value={formData.contra}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.container}>
                  <label className={styles.la}>
                    <input
                      className={styles.ra}
                      type="radio"
                      name="genero"
                      value="Femenino"
                      onChange={handleChange}
                    /> Femenino
                  </label>
                  <label className={styles.la}>
                    <input
                      className={styles.ra}
                      type="radio"
                      name="genero"
                      value="Masculino"
                      onChange={handleChange}
                    /> Masculino
                  </label>
                </div>

                <div className="vh-60 row m-0 text-center align-items-center justify-content-center m-5">
                  <input
                    type="file"
                    className='hidden'
                    name="imagen"
                    id="imagenPrevisualizacion"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData({ ...formData, imagen: file }); // Actualiza el formulario
                        setPreviewImage(URL.createObjectURL(file)); // Genera la previsualización
                      }
                    }}
                  />
                  {previewImage && ( // Muestra la imagen si existe
                    <img
                      src={previewImage}
                      alt="Previsualización"
                      style={{ width: '200px', height: '200px', objectFit: 'cover', marginTop: '20px' }}
                    />
                  )}
                  <button className="ms-4 css-button css-button-rounded css-button-rounded--blue">
                    Subir Imagen
                  </button>
                </div>

                {/* Botón de registro */}
                <button type="submit" className='ms-4 css-button css-button-rounded css-button-rounded--blue'>
                  Registrar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <img src={userImage} alt="Usuario" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registro;