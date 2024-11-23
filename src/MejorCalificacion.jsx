import React from 'react'
import imgBanner from './img/Bannerpeli.jpg';
import styles from "./css/MejorCalificado.module.css";
import imgCuenta from './img/fjpg.jpg';
import { Footer } from './Footer'
import { NavbarIng } from './NavbarIng'

const MejorCalificacion = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <header>
                <NavbarIng/>
            </header>
            <main className={styles.cont}>
                <div className={styles.contenedor} >
                    <img src={imgBanner} alt="Banner" className={styles.banner} />
                    <h1 className={styles.titulo}>SPY X Family Code: White</h1>
                    <div className={styles.sinopsis} >
                        <h1>Sinopsis</h1>
                        <p>Él es un espía. Ella es una asesina. Juntos, Loid y Yor ocultan sus dobles vidas mientras fingen ser la familia perfecta. Sin embargo, su hija adoptiva, Anya, que es telépata, conoce los emocionantes secretos de ambos sin que lo sospechen. Bajo la excusa de llevar a su familia a una escapada invernal, los intentos de Loid por avanzar en su misión en curso, Operation Strix, se complican cuando Anya se involucra por error, desencadenando acontecimientos ¡que amenazan la paz mundial!</p>
                    </div>
                    <div className={styles.contSinop}>
                        <div className={styles.alinear}>
                            <h1>Calificacion</h1>
                            <div className="starRating">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                            </div>
                        </div>
                        <div>
                            <h1>Reseñas</h1>
                            <div className={styles.carta} >
                                <div className={styles.disp}>
                                    <img src={imgCuenta} alt="" className={styles.imgReview} />
                                    <h4>Brenda Solis</h4>
                                </div>
                                <div className={styles.descripcion}>
                                    _________________________________________________________________________________________________________________
                                    <p>Me encantó esta película; revivió mi niñez. Ojalá hubiera sido más feliz. Ya quiero irme, pero de este mundo. No se crean, solo quiero graduarme.  </p>
                                    <div className="starRating">
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                    </div>
                                    <div className="starRatingEmpty">
                                        <span>&#9734;</span>
                                        <span>&#9734;</span>
                                        <span>&#9734;</span>
                                        <span>&#9734;</span>
                                        <span>&#9734;</span>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.carta} >
                                <div className={styles.disp}>
                                    <img src={imgCuenta} alt="" className={styles.imgReview} />
                                    <h4>Brenda Solis</h4>
                                </div>
                                <div className={styles.descripcion}>
                                    <div className={styles.contIn}>
                                        <div className={styles.searchIn}>
                                            <input name="txtComent" className={styles.search} placeholder="Escribe tu comentario" />
                                            <button className='ms-4 css-button css-button-rounded css-button-rounded--blue'>enviar</button>

                                        </div>
                                        <div class="btn-group">

                                            <button type="button" class="btn btn-outline-secondary">
                                                <i class="bi bi-star-fill"></i>
                                                <span class="visually-hidden">Button</span>
                                            </button>
                                            <button type="button" class="btn btn-outline-secondary">
                                                <i class="bi bi-star-fill"></i>
                                                <span class="visually-hidden">Button</span>
                                            </button>
                                            <button type="button" class="btn btn-outline-secondary">
                                                <i class="bi bi-star-fill"></i>
                                                <span class="visually-hidden">Button</span>
                                            </button>
                                            <button type="button" class="btn btn-outline-secondary">
                                                <i class="bi bi-star-fill"></i>
                                                <span class="visually-hidden">Button</span>
                                            </button>
                                            <button type="button" class="btn btn-outline-secondary">
                                                <i class="bi bi-star-fill"></i>
                                                <span class="visually-hidden">Button</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default MejorCalificacion
