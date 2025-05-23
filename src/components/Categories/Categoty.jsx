import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/apiSlice";

import styles from "../../styles/Category.module.css";

import Products from "../Products/Products";

const Category = () => {

    const { id } = useParams();

    const defaultValues = {
        title: "",
        price_min: 0,
        price_max: 0
    }

    const defaultParams = {
        title: "",
        ...defaultValues
    };

    const [values, setValues] = useState(defaultValues);

    const [params, setParams] = useState(defaultParams);

    useEffect(() => {
        if(!id) return;

        setParams({ ...defaultParams, categoryId: id })
    }, [id]);

    const { data, isLoading, isSuccess } = useGetProductsQuery(params);

    const handleChange = ({ target: {value, name} }) => {
        setValues({...values, [name]: value })
    };

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
                    onChange={handleChange}
                    value={values.title}
                    />
                </div>

                <div className={styles.filter}>
                    <input
                    type="numder"
                    name="price_min" 
                    placeholder="0"
                    onChange={handleChange}
                    value={values.price_min}
                    />
                </div>

                <div className={styles.filter}>
                    <input
                    type="numder"
                    name="price_max" 
                    placeholder="0"
                    onChange={handleChange}
                    value={values.price_max}
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