import useimg from './img/logo-chan.png';
import imgCuenta from './img/fjpg.jpg';

export function NavbarIng(){
  return (
    <div>
          {/* ESTE CODIGO ES EL NAVBAR DE LA PAGINA WEB*/}
       <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={useimg} alt="" width="150" height="45" class="d-inline-block align-text-top" />
                    </a>
                    <div class="nav-group col-xs-2 col-xl-8">
                        <a href="/Inicio" className='me-5 etq-a pt-2'><h5>Inicio</h5></a>
                        <a href="/Review" className='me-5 etq-a pt-2'><h5> Mis Reseñas</h5></a>
                        <a href="/Inicio" className='me-5 etq-a pt-2'><h5> Peliculas</h5></a>
                        <a href="/Inicio" className='me-5 etq-a pt-2'><h5> Series</h5></a>
                        <a href="/MejorCalificacion" className='me-5 etq-a pt-2'><h5> Mejores Calificadas</h5></a>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                                <button  className='ms-4 css-button css-button-rounded css-button-rounded--blue' type="submit">Buscar</button>
                        </form>
                    </div>
                    <div className="navbar-links">
                        <div class="user-menu">
                            <button class="avatar-btn">
                                <img src={imgCuenta} alt="Avatar" width={80} height={80} class="avatar" />
                            </button>
                            <div class="dropdown">
                                <div class="dropdown-content">
                                    <a href="/Cuenta">Perfil</a>
                                    <a href="">Ajustes</a>
                                    <a href="/Login" >Cerrar Sesión</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  );
}
