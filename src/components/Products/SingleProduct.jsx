import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { useGetProductQuery } from "../../redux/api/apiSlice";

import { ROUTES } from "../../utils/routes";
import Product from "./Product";

const SingleProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
    }, [isLoading, isFetching, isSuccess])

    
    return !data ? (
            <section className="preloader">Loading...</section>
        ) : (
            <>
                <Product {...data} />
            </>
        )


}

export default SingleProduct