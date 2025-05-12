import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

import styles from "../../styles/Product.module.css";

const Product = ({ title, price, images, description }) => {

    const currentImage = images[0];

    const SIZES = [8, 8.5, 9];

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
                            // onClick images
                            onClick={() => {}}
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
                            // onClick SIZES
                            <div onClick={() => {}} className={`${styles.size}`} key={size}>
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.actions}>
                    <button className={styles.add}>Add to cart</button>
                    <button className={styles.favorite}>Add to favorites</button>
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