import { FaChalkboard, FaChalkboardTeacher, FaHome ,FaTelegramPlane} from 'react-icons/fa';
{/*  */}
import { BsCartPlus } from 'react-icons/bs';
import { NavLink, Outlet } from "react-router-dom";

const StudentsDashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-purple-600">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full mt-24 text-white hover:text-white">
                    {/* Sidebar content here */}
                    <li><NavLink to=''><FaHome></FaHome>Students Home</NavLink></li>
                   
                    <li><NavLink to='/dashboard3/StudentsCart'>
                        <BsCartPlus></BsCartPlus>
                        
                        My Selected Classes</NavLink></li>
                    <li><NavLink to='/dashboard3/StudentsShowCart'><FaChalkboard></FaChalkboard>My Enrolled Classes</NavLink></li>
                    <li><NavLink to='/dashboard3/Allpayment'>
                        <FaTelegramPlane></FaTelegramPlane>Payment</NavLink></li>

                    {/* <li><NavLink to='/dashboard3/payment'>Payment</NavLink></li> */}
                    
                    
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    
                    <li><NavLink to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>
                    <li><NavLink to='/Approved'><FaChalkboardTeacher></FaChalkboardTeacher> Classes</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default StudentsDashboard;