import { Route, Routes } from "react-router-dom";
import Home from '../Home/Home';

const AppRoutes = () => (

    // <main>
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    // </main>
    )

export default AppRoutes