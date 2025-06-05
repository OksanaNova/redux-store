import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from '../../../utils/routes';

import styles from './Header.module.css';

import LOGO from '../../../images/logo.svg';
import AVATAR from '../../../images/avatar.svg';
import SEARCH from '../../../images/search.svg';
import FAVORITES from '../../../images/heart.svg';
import CART from '../../../images/cart.svg';

import { toggleForm } from "../../../redux/user/userSlice";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../../redux/api/apiSlice";


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState("");

    const { currentUser, cart } = useSelector(({ user }) => user );

    const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });

    const { data, isLoading } = useGetProductsQuery({ title: searchValue });

    useEffect(() => {
        if(!currentUser) return;

        setValues(currentUser)
    }, [currentUser])

    const handleClick = () => {
        if(!currentUser) dispatch(toggleForm(true));
        else navigate(ROUTES.PROFILE);
    }

    const handleSearch = ({ target: { value } }) => {
        setSearchValue(value);
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
                        value={searchValue}
                        onChange={handleSearch}/>
                    </div>

                    {searchValue && <div className={styles.box}>
                        {isLoading ? 'Loading...' : !data.length ? 'No results' : (
                            data.map(({ title, images, id }) => {
                                return (
                                    <Link 
                                    to={`/products/${id}`} 
                                    onClick={() => setSearchValue("")} 
                                    key={id}
                                    className={styles.item}
                                    >
                                        <div 
                                        className={styles.image}
                                        style={{ backgroundImage: `url(${images[0]})` }}
                                        />
                                        <div className={styles.title}>{title}</div>
                                    </Link>
                                )
                            })
                        )}
                        </div>}
                </form>

                <div className={styles.account}>
                    <Link to={ROUTES.FAVORITES} className={styles.favorites}>
                        <img src={FAVORITES} alt="favorites" className={styles.icon_fav} />
                    </Link>

                    <Link to={ROUTES.CART} className={styles.cart}>
                        <img src={CART} alt="cart" className={styles.icon_cart}/>
                        {!!cart.length && (<span className={styles.count}>{cart.length}</span>)}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header