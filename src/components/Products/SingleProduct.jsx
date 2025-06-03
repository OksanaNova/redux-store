import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useGetProductQuery } from "../../redux/api/apiSlice";

import { ROUTES } from "../../utils/routes";

import Product from "./Product";
import Products from "./Products";
import { getRelatedProducts } from "../../redux/products/productsSlice";


const SingleProduct = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const { list, related } = useSelector(({ products }) => products);
    // const productsState = useSelector((state) => state.products);
    // const related = productsState.related;
    // const list = productsState.list;

    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
    }, [isLoading, isFetching, isSuccess]);

    useEffect(() => {
        if(!data || !list.length) return;

        if(data) {
            dispatch(getRelatedProducts(data.category.id));
        }
    }, [data, dispatch, list.length])

    
    return !data ? (
            <section className="preloader">Loading...</section>
        ) : (
            <>
                <Product {...data} />
                <Products products={related} amount={5} title="Related products"/>
            </>
        )
}

export default SingleProduct