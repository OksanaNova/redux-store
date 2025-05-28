import { useSelector } from "react-redux";

import styles from "../../styles/Cart.module.css";

import TRASH from '../../images/trash-can.svg';

const Cart = () => {

    const { cart } = useSelector(({ user }) => user);
    // const cart = useSelector((state) => state.user.cart);


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
                                <button className={styles.minus}>-</button>
                                <span>{quantity}</span>
                                <button className={styles.plus}>+</button>
                            </div>

                            <div className={styles.total}>${price * quantity}</div>

                            <div className={styles.delete}>
                                <img src={TRASH} alt="delete"/>
                            </div>
                        </div>
                    })}
                </div>

                <div className={styles.actions}>
                    <div className={styles.total}>
                        TOTAL PRICE: {" "}
                        <span></span>
                    </div>
                </div>
            </>
            )}
        </section>
    )
}

export default Cart