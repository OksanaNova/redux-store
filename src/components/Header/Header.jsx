import { Link } from "react-router-dom";

import styles from '../../styles/Header.module.css';

import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';
import AVATAR from 

const Header = () => {
    return (
        <div className={styles.header}>

            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="Stuff" />
                </Link>
            </div>

            <div className={styles.info}>
                <div className={styles.user}>
                    <div 
                        className={styles.avatar} 
                        style={{ backgroundImage: `url(${AVATAR})` }} 
                    />
                    <div className={styles.username}>
                        
                    </div>
                </div>

                <form className={styles.form}>
                    <div className={styles.icon}></div>
                    
                </form>
            </div>

        </div>
    )
}

export default Header