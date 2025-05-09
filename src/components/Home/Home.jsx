import { useSelector } from "react-redux";

// import styles from '../../styles/Home.module.css';

import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";

const Home = () => {

    // const { products, categories } = useSelector((state) => state);

    const products = useSelector((state) => state.products);
    const myProducts = products.list;

    const categories = useSelector((state) => state.categories);
    const myCategories = categories.list;




    return (
        <div>
            <Poster />
    
            <Products products={myProducts} amount={5} title="Trending"/>

            <Categories categories={myCategories} amount={5} title="Worth seeing" />
            
            <Banner />
        </div>     
    )
}

export default Home