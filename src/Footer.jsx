import useimg from './img/logo-chan.png';

export function Footer(){
  return (
    <div>
    <footer className="footer mt-auto py-3 bg-light">
   <div className="d-flex align-items-start">
     <div className="ms-5 d-flex flex-column align-items-start">
       <img src={useimg} alt="" width="150" height="45" className="d-inline-block align-text-top" />
       <br /> <br />
       Tenemos las mejores reseñas para tus películas <br />
       No pierdas el tiempo en algo que no es "CINE"<br />
       Por FANS para FANS...
       {/*<p>mi nombre es {nombre}</p>*/}
     </div>
     <div className="ms-5 col-xs-2 col-md-2">
       <h6>Categorias</h6>
       <ul className="footer-links">
         <li><a href="">Accion</a></li>
         <li><a href="">Aventura</a></li>
         <li><a href="">Comedia</a></li>
         <li><a href="">Drama</a></li>
         <li><a href="">Terror</a></li>
         <li><a href="">Ciencias Ficcion</a></li>
         <li><a href="">Fantasia</a></li>
       </ul>
     </div>
     <div class="col-xs-2 col-md-2">
       <ul class="footer-links">
         <br />
         <br />
         <li><a href="">Animacion</a></li>
         <li><a href="">Crimen</a></li>
         <li><a href="">Suspenso</a></li>
         <li><a href="">Romance</a></li>
         <li><a href="">Documental</a></li>
         <li><a href="">Misterio</a></li>
       </ul>
     </div>
     <div class="col-xs-2 col-md-2">
       <ul class="footer-links">
         <br />
         <br />
         <li><a href="">Musicales</a></li>
         <li><a href="">Infantil</a></li>
         <li><a href="">Historico</a></li>
         <li><a href="">Biografico</a></li>
         <li><a href="">Guerra</a></li>
         <li><a href="">Deportes</a></li>
       </ul>
     </div>
     <div class="row">
       <div class="col-md-4 col-sm-6 col-xs-12">
         <ul class="social-icons">
           <i class="fa-solid fa-house"></i>
           <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
           <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
           <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
         </ul>
       </div>
       <br /> <br />
       <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
         <a href="#"> Channelfan Inc.</a>.
       </p>
     </div>

   </div>
 </footer>
 
</div>
  );
}


