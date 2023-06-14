import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";



const Main = () => {
    const location=useLocation();
    console.log(location);
    const NoNavbarAndFooter=location.pathname.includes('login');

    return (
        <div>
            {NoNavbarAndFooter ||<Navbar></Navbar>}
            <Outlet></Outlet>
            
            {NoNavbarAndFooter ||<Footer></Footer>}
            
        </div>
    );
};

export default Main;