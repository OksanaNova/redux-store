import { Link } from "react-router-dom";

import styles from '../../styles/Header.module.css';

import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.svg';
import SEARCH from '../../images/search.svg';
import FAVORITES from '../../images/heart.svg';
import CART from '../../images/cart.svg';

const Header = () => {
    return (
        <div className={styles.header}>

            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="logo" />
                </Link>
            </div>

            <div className={styles.info}>
                <div className={styles.user}>
                    <div 
                        className={styles.avatar} 
                        style={{ backgroundImage: `url(${AVATAR})` }}>...</div>
                    <div className={styles.username}>Guest</div>
                </div>

                <form className={styles.form}>
                    <div className={styles.icon}>
                        <img src={SEARCH} alt="search" width='20px'/>
                    </div>

                    <div className={styles.input}>
                        <input 
                        type="search" 
                        name="search" 
                        placeholder="Search for anything..." 
                        autoComplete="off"
                        value=""
                        onChange={() => {}}/>
                    </div>

                    <div className={styles.box}>

                    </div>
                </form>

                <div className={styles.account}>
                    <Link to={ROUTES.HOME}>
                        <img src={FAVORITES} alt="favorites" />
                    </Link>
                    <Link to={ROUTES.HOME}>
                        <img src={CART} alt="cart" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header