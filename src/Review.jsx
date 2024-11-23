import React from 'react'
import imgCuenta from './img/fjpg.jpg';
import imgBanner from './img/Barbie.png';
import styles from "./css/Review.module.css";
import { Footer } from './Footer'
import { NavbarIng } from './NavbarIng'

const Review = () => {
  return (
       <div>
            <header>
                <NavbarIng/>
            </header>
            <main className={styles.cont}>
                <div className={styles.card}>
                    <div className={styles.ContCuenta}>
                        <img src={imgCuenta} alt="" className={styles.imgCuenta} />
                        <h1>Brenda Solis</h1>
                        <p>Administrador</p>
                        <br /><br />
                    </div>
                    <div>
                        <img src={imgBanner} alt="Banner" className={styles.banner} />
                    </div>

                </div>
            </main>
            <div className={styles.card3}>
                <h1 className={styles.titulo}>Mis Reseñas</h1>
                <div className={styles.contenedor} >
                    <div className={styles.carta} >
                        <div className={styles.disp}>
                            <img src={imgCuenta} alt="" className={styles.imgReview} />
                            <h4>Brenda Solis</h4>
                            <p>Pelicula: Alicia en El Pais de las Maravillas</p>
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
                            <p>Pelicula: Alicia en El Pais de las Maravillas</p>
                        </div>
                        <div className={styles.descripcion}>
                            ________________________________________________________________________________________________________________
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
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Review
