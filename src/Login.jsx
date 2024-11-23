import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Pantalla.css'
import './css/Login.css'
import './css/Navbar.css'
import userImage from './img/fondo.png';
import imgBienvenida from './img/Claqueta.png';
import { Footer } from './Footer'
import { Navbar } from './Navbar'

const Login = () =>{
  return (
    <body className='body'>
      <Navbar/>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='row1 position-relative col-md-4 col-8 align-items-center justify-content-end'>
          <img src={userImage} className='img-login rounded' />
          <div className="recuadro border rounded p-3">
            ¿No tienes Cuenta?
            <a href="/Registro" className='ms-4 css-button css-button-rounded css-button-rounded--blue'>Registrarse</a>
          </div>
        </div>
        <div className='row2 position-relative col-md-4 col-8 align-items-center justify-content-start'>
          <div className='log p-4 border rounded'>
            {/* Logo dentro del formulario */}
            <div className='text-center mb-4'>
              <img src={imgBienvenida} width="150" height="150" alt="Bienvenid@" className="img-fluid" />
              <br />
              <h1>Bienvenid@</h1>
            </div>
            <form>
              <div className='mb-3'>
                <label htmlFor="Email_user">Usuario</label>
                <input type='email' placeholder='' className='form-control'/>
              </div>
              <div className='mb-3'>
                <label htmlFor="Contra_user">Contraseña</label>
                <input type='password' placeholder='' className='form-control' />
              </div>
              <a className='css-button css-button-sliding-to-top css-button-sliding-to-top--blue' href='/Inicio' >Iniciar Sesión</a>
              <br />
              <br />
              ¿Olvidaste tu Contraseña?
              <a href="#" className='Reg'> Haz clic aqui</a>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer>
    <Footer/>
    </footer>
  </body>
  )
}

export default Login