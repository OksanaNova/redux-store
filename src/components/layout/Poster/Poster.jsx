import styles from './Poster.module.css';

import BG from '../../../images/computer.png';

const Poster = () => {
    return (
        <section className={styles.poster}>
            <div className={styles.title}>BIG SALE 20%</div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}>THE BESTSELLER OF 2025</div>
                    <h1 className={styles.head}>LENNON r2d2 <br/> with NVIDIA 5090 TI</h1>
                    <button className={styles.button}>Shop Now</button>
                </div>
                <div className={styles.image}>
                    <img src={BG} alt='computer' />
                </div>
            </div>
        </section>
    )
}

export default Poster