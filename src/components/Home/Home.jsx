import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByPrice } from "../../redux/products/productsSlice";
import { getCategories } from "../../redux/categories/categoriesSlice";
import { getProducts } from '../../redux/products/productsSlice';

import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";


const Home = () => {

    const dispatch = useDispatch();

    const { 
        products: { list, filtered }, 
        categories 
    } = useSelector((state) => state);


    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {

        if(!list.length) return;
        dispatch(filterByPrice(100))
    }, [dispatch, list.length])

    return (
        <div>
            <Poster />
    
            <Products products={list} amount={5} title="Trending"/>

            <Categories categories={categories.list} amount={5} title="Worth seeing" />
            
            <Banner />

            <Products products={filtered} amount={5} title="Less than $100"/>
        </div>     
    )
}

export default Home