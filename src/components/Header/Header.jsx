import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from '../../utils/routes';

import styles from '../../styles/Header.module.css';

import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.svg';
import SEARCH from '../../images/search.svg';
import FAVORITES from '../../images/heart.svg';
import CART from '../../images/cart.svg';

import { toggleForm } from "../../redux/user/userSlice";
import { useEffect, useState } from "react";


const Header = () => {

    const dispatch = useDispatch();

    const { currentUser } = useSelector(({ user }) => user );

    const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });

    useEffect(() => {
        if(!currentUser) return;

        setValues(currentUser)
    }, [currentUser])

    const handleClick = () => {
        if(!currentUser) dispatch(toggleForm(true));
    }

    return (
        <div className={styles.header}>

            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="logo" />
                </Link>
            </div>

            <div className={styles.info}>
                <div className={styles.user} onClick={handleClick}>
                    <div 
                        className={styles.avatar} 
                        style={{ backgroundImage: `url(${values.avatar})` }} 
                    />
                    <div className={styles.username}>{values.name}</div>
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
                        {/* штука для автонабора или поиска */}
                    </div>
                </form>

                <div className={styles.account}>
                    <Link to={ROUTES.HOME} className={styles.favorites}>
                        <img src={FAVORITES} alt="favorites" className={styles.icon_fav} />
                    </Link>

                    <Link to={ROUTES.CART} className={styles.cart}>
                        <img src={CART} alt="cart" className={styles.icon_cart}/>
                        <span className={styles.count}>2</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header