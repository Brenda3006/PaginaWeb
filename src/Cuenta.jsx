import React from 'react'
import imgCuenta from './img/fjpg.jpg';
import imgBanner from './img/Barbie.png';
import styles from "./css/Cuenta.module.css";
import { Footer } from './Footer';
import { NavbarIng } from './NavbarIng'

const Cuenta = () => {
  return (
    <div>
        <NavbarIng/>
            <header>

            </header>
            <main className={styles.cont}>
                <div className={styles.card}>
                    <img src={imgCuenta} alt="" className={styles.imgCuenta} />
                    <h1>Brenda Solis</h1>
                    <p>Administrador</p>
                    <br /><br />

                    <div className={styles.alinear}>
                        <a href="#" >Datos Personales</a><br />
                        <a href="#">Agregar Pelicula</a><br />
                        <a href="#">Moderadores</a>
                    </div>


                </div>
                <div className={styles.contenedor} >
                    <img src={imgBanner} alt="Banner" className={styles.banner} />
                    <div className={styles.carta} >
                        <h1>Brenda Solis</h1>
                        <p>Frases que se ponen aqui</p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
  )
}

export default Cuenta
