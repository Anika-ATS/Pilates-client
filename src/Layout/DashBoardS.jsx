import { NavLink, Outlet } from "react-router-dom";

import { FaChalkboard, FaChalkboardTeacher, FaHome } from 'react-icons/fa';
const DashBoardS = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet>
                   
                </Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            
            <div className="drawer-side bg-green-400">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full mt-24">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard'><FaHome></FaHome>User Home</NavLink></li>
                   
                    <li><NavLink to='/dashboard/NAddaClass'><FaChalkboard></FaChalkboard>Add a Class</NavLink></li>
                    
                    <li><NavLink to='/dashboard/instructorD'><FaChalkboard></FaChalkboard>My Claasses</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    
                    <li><NavLink to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoardS;