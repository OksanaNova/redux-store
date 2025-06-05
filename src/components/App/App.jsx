import AppRoutes from "../Routes/AppRoutes";
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import Sidebar from '../layout/Sidebar/Sidebar';
import UserForm from "../pages/User/UserForm";


const App = () => {

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