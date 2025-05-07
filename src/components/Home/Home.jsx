import { useSelector } from "react-redux";

import styles from '../../styles/Home.module.css';

import Poster from "../Poster/Poster";
import Products from "../Products/Products";

const Home = () => {

    // const { list } = useSelector(({ products }) => products)
    const products = useSelector((state) => state.products);
    const list = products.list;



    return (
        <div>
            <Poster />
    
            <Products products={list} amount={5} title="Trending"/>
            
        </div>     
    )
}

export default Home