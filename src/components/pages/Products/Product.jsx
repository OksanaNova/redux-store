import { ROUTES } from "../../../utils/routes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Swal from "sweetalert2";

import { useEffect, useState } from "react";

import styles from "./Product.module.css";

import { addItemToCart } from "../../../redux/user/userSlice";
import { addItemToFavorites } from "../../../redux/user/userSlice";


const Product = (item) => {

    const { title, price, images, description } = item;

    const dispatch = useDispatch();

    const [currentImage, setCurrentImage] = useState();
    const [currentSize, setCurrentSize] = useState();

    useEffect(() => {
        if(!images.length) return;

        setCurrentImage(images[0])
    }, [images])

    const SIZES = [8, 8.5, 9];

    const addToCart = () => {
        if(!currentSize) {
            Swal.fire("Please select a size before adding to cart");
            return;
        }
        dispatch(addItemToCart(item));
    }

    const favorites = useSelector((state) => state.user.favorites);

    const addToFavorites = () => {
        const alreadyInFavorites = favorites.some((element) => element.id === item.id);

        if(alreadyInFavorites) {
            Swal.fire("This item is already in your favorites 💖");
            return;
        }
        dispatch(addItemToFavorites(item));
    }

    return (
        <section className={styles.product}>
            <div className={styles.images}>
                <div 
                    className={styles.current}
                    style={{ backgroundImage: `url(${currentImage})`}} 
                />

                <div className={styles["images-list"]}>
                    {images.map((image, i) => (
                        <div 
                            key={i}
                            className={styles.image}
                            style={{ backgroundImage: `url(${image})`}}
                            onClick={() => setCurrentImage(image)}
                        />
                    ))}
                </div>

            </div>

            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>

                <div className={styles.price}>${price}</div>

                <div className={styles.color}>
                    <span>Color:</span> Green
                </div>

                <div className={styles.sizes}>
                    <span>Sizes:</span>
                    <div className={styles.list}>
                        {SIZES.map(size => (
                            <div 
                                onClick={() => setCurrentSize(size)} 
                                className={`${styles.size} ${currentSize === size ? styles.active : "" }`} 
                                key={size}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.actions}>
                    <button
                        onClick={addToCart}
                        className={styles.add}>
                        Add to cart
                    </button>
                    
                    <button 
                        onClick={addToFavorites}
                        className={styles.favorite}>
                        Add to favorites
                    </button>
                </div>  

                <div className={styles.bottom}>
                    <div className={styles.purchase}>
                        {Math.floor(Math.random() * 20 + 1)} people purchased
                    </div>

                    <Link to={ROUTES.HOME}>Back</Link>
                </div>         
            </div>
        </section>
    )
}

export default Product