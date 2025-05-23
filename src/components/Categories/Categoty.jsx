import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/apiSlice";

import styles from "../../styles/Category.module.css";

import Products from "../Products/Products";

const Category = () => {

    const { id } = useParams();

    const defaultParams = {
        title: "",
        price_min: 0,
        price_max: 0,
        categoryId: id
    }

    const [params, setParams] = useState(defaultParams);

    useEffect(() => {
        if(!id) return;

        setParams({ ...defaultParams, categoryId: id })
    }, [id]);

    const { data, isLoading, isSuccess } = useGetProductsQuery(params);
    console.log(data);

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>SHOES</h2>

            <form 
            className={styles.filters}
            onSubmit={() => {}}
            >
                <div className={styles.filter}>
                    <input
                    type="text"
                    name="title" 
                    placeholder="Product name"
                    onChange={() => {}}
                    value={params.title}
                    />
                </div>

                <div className={styles.filter}>
                    <input
                    type="numder"
                    name="price_min" 
                    placeholder="0"
                    onChange={() => {}}
                    value={params.price_min}
                    />
                </div>

                <div className={styles.filter}>
                    <input
                    type="numder"
                    name="price_max" 
                    placeholder="0"
                    onChange={() => {}}
                    value={params.price_max}
                    />
                </div>

                <button type="submit" hidden />

            </form>

            {isLoading ? (
                <div className="preloader">Loading...</div>
            ) : !isSuccess || !data.length ? (
                <div className={styles.back}>
                    <span>No results</span>
                    <button>Reset</button>
                </div>
            ) : (
                <Products 
                title="" 
                products={data} 
                style={{ padding: 0 }} 
                amount={data.length}/>
            )}

        </section>
    )
}

export default Category