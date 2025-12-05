import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";


const Main = () => {
    const location = useLocation();
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center items-center mt-72'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    // console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

    return (
        <div>
            { noHeaderFooter  || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHeaderFooter  || <Footer></Footer>}
        </div>
    );
};

export default Main;

