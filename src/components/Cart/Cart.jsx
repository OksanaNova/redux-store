import { useDispatch, useSelector } from "react-redux";
import { sumBy } from "../../utils/common";
import { addItemToCart, removeItemFromCart } from "../../redux/user/userSlice";

import styles from "../../styles/Cart.module.css";

import TRASH from '../../images/trash-can.svg';


const Cart = () => {

    const dispatch = useDispatch();
    
    const { cart } = useSelector(({ user }) => user);
    // const cart = useSelector((state) => state.user.cart);

    const changeQuantity = (item, quantity) => {
        dispatch(addItemToCart({...item, quantity}))
    };

    const removeItem = (id) => {
        dispatch(removeItemFromCart(id))
    };

    return (
        <section className={styles.cart}>
            <h2 className={styles.title}>Your cart</h2>

            {!cart.length ? (
                <div className={styles.empty}>Cart is empty</div>
            ) : (
            <>
                <div className={styles.list}>
                    {cart.map((item) => {
                        const {title, category, images, price, id, quantity } = item;

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

                            <div className={styles.quantity}>
                                <button 
                                className={styles.minus} 
                                onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}
                                >
                                -
                                </button>

                                <span>{quantity}</span>

                                <button 
                                className={styles.plus}
                                onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}
                                >
                                +
                                </button>
                            </div>

                            <div className={styles.total}>${price * quantity}</div>

                            <div className={styles.delete} onClick={() => removeItem(item.id)}>
                                <img src={TRASH} alt="delete"/>
                            </div>
                        </div>
                    })}
                </div>

                <div className={styles.actions}>
                    <div className={styles.last}>
                        TOTAL PRICE: {" "}
                        <span>
                            ${sumBy(cart.map(item => item.price * item.quantity))}
                        </span>
                    </div>

                    <button className={styles.proceed}>Proceed to checkout</button>
                </div>
            </>
            )}
        </section>
    )
}

export default Cart