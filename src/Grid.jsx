import styles from "./css/MovieCard.module.css";
import imgPeli from "./img/intensamente.png";
export function Grid() {
    console.log(styles);
    return (
        <ul className={styles.moviesGrid}>
            <li className={styles.movieCard}>
                <img className= {styles.movieImage} src={imgPeli} width={230} height={345} />
                <div>Intensamente 2</div>
            </li>
            <li className={styles.movieCard}>
                <img className= {styles.movieImage} src={imgPeli} width={230} height={345} />
                <div>Intensamente 2</div>
            </li>
            <li className={styles.movieCard}>
                <img className= {styles.movieImage} src={imgPeli} width={230} height={345} />
                <div>Intensamente 2</div>
            </li>
            <li className={styles.movieCard}>
                <img className= {styles.movieImage} src={imgPeli} width={230} height={345} />
                <div>Intensamente 2</div>
            </li>
            <li className={styles.movieCard}>
                <img className= {styles.movieImage} src={imgPeli} width={230} height={345} />
                <div>Intensamente 2</div>
            </li>
            <li className={styles.movieCard}>
                <img className= {styles.movieImage} src={imgPeli} width={230} height={345} />
                <div>Intensamente 2</div>
            </li>
            <li className={styles.movieCard}>
                <img className= {styles.movieImage} src={imgPeli} width={230} height={345} />
                <div>Intensamente 2</div>
            </li>
            <li className={styles.movieCard}>
                <img className= {styles.movieImage} src={imgPeli} width={230} height={345} />
                <div>Intensamente 2</div>
            </li>
            <li className={styles.movieCard}>
                <img className= {styles.movieImage} src={imgPeli} width={230} height={345} />
                <div>Intensamente 2</div>
            </li>
            <li className={styles.movieCard}>
                <img className= {styles.movieImage} src={imgPeli} width={230} height={345} />
                <div>Intensamente 2</div>
            </li>
            
        </ul>
    );
}