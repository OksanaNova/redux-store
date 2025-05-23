import { useDispatch } from "react-redux";
import { useEffect } from "react";

import AppRoutes from "../Routes/AppRoutes";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import UserForm from "../User/userForm";

import { getCategories } from "../../redux/categories/categoriesSlice";
import { getProducts } from '../../redux/products/productsSlice';



const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="app">
            <Header />
            <UserForm />

        <div className="container">
            <Sidebar />
            <AppRoutes />
        </div>
            
            <Footer />
        </div>
    )
};

export default App;