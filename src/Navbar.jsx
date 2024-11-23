import useimg from './img/logo-chan.png';
import imgCuenta from './img/fjpg.jpg';

export function Navbar(){
  return (
    <div>
          {/* ESTE CODIGO ES EL NAVBAR DE LA PAGINA WEB*/}
       <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={useimg} alt="" width="150" height="45" class="d-inline-block align-text-top" />
                    </a>
                    <div class="nav-group col-xs-2 col-xl-8">
                    </div>
                    <div className="navbar-links">
                        <a href="/Login" className='nav-link etq-a me-5 pt-2'><h5>Inicia Sesion</h5></a>
                        <a href="/Registro" className='nav-link etq-a me-5 pt-2'><h5>Registrarse</h5></a>
                    </div>
                </div>
            </nav>
    </div>
  );
}
