import { FaChalkboard, FaChalkboardTeacher, FaHome } from 'react-icons/fa';
import { NavLink, Outlet } from "react-router-dom";
const AdminDashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-green-500">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full mt-24">
                    {/* Sidebar content here */}
                    <li><NavLink to=''><FaHome></FaHome>User Home</NavLink></li>
                   
                    <li><NavLink to='/'><FaChalkboard></FaChalkboard>Manage Classes</NavLink></li>
                    
                    <li><NavLink to=''><FaChalkboard></FaChalkboard></NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    
                    <li><NavLink to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default AdminDashBoard;