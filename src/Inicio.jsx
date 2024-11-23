import React from 'react'
import { Grid } from './Grid'
import styles from "./css/Inicio.module.css";
import { Footer } from './Footer';
import { NavbarIng } from './NavbarIng'
import './css/Pantalla.css'

const Inicio = () => {
  return (
    <div>
      <NavbarIng/>    
      <header>
        <h1 className={styles.title}>Peliculas</h1>
    </header>
    <main className={styles.cont}>
        <Grid/>
    </main>
    <footer>
    <Footer/>
    </footer>
</div>
  )
}

export default Inicio
