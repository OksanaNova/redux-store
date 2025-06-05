import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import Home from '../pages/Home/Home';
import SingleProduct from "../pages/Products/SingleProduct";
import Profile from "../pages/Profile/Profile";
import SingleCategory from "../layout/Categories/SingleCategory";
import Cart from "../pages/Cart/Cart";
import Favorites from "../pages/Favorites/Favorites";

const AppRoutes = () => (

        <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        </Routes>
    )

export default AppRoutes