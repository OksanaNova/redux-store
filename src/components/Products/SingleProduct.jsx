import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/api/apiSlice";

const SingleProduct = () => {

    const { id } = useParams();

    const { data } = useGetProductQuery({ id });
    console.log('data', data);
    
    return (
        <div>

        </div>
    )
}

export default SingleProduct