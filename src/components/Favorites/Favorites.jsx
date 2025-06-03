import { useDispatch, useSelector } from "react-redux";
import { removeItemFromFavorites, removeAllFromFavorites } from "../../redux/user/userSlice";

import styles from "../../styles/Cart.module.css";

import TRASH from '../../images/trash-can.svg';
import { useLocalStorage } from "../../utils/useLocalStorage";


const Favorites = () => {

    const dispatch = useDispatch();

    const favorites = useSelector((state) => state.user.favorites);

    useLocalStorage('favorites', favorites);

    const removeItem = (id) => {
        dispatch(removeItemFromFavorites(id))
    };

    return (
        <section className={styles.cart}>
            <h2 className={styles.title}>Your favorites</h2>

            {!favorites.length ? (
                <div className={styles.empty}>Nothing here yet!</div>
            ) : (
            <>
                <div className={styles.list}>
                    {favorites.map((item) => {
                        const {title, category, images, price, id} = item;

                        return <div className={styles.item} key={id}>

                            <div 
                            className={styles.image}
                            style={{ backgroundImage: `url(${images[0]})`}}
                            />  

                            <div className={styles.info}>
                                <h3 className={styles.name}>{title}</h3>
                                <div className={styles.category}>{category.name}</div>
                            </div>

                            <div className={styles.price}>${price}</div>

                            <div className={styles.delete} onClick={() => removeItem(item.id)}>
                                <img src={TRASH} alt="delete"/>
                            </div>

                        </div>
                    })}
                </div>

                <div className={styles.actions}>
                    <button 
                    className={styles.proceed}
                    onClick={() => dispatch(removeAllFromFavorites())}
                    >
                        Delete All
                    </button>
                </div>
            </>
            )}

        </section>
    )
}

export default Favorites