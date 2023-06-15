import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    const NavItems = <>
        <li><Link to='/' className='ml-9'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>

        

        {user?.email ?<>
        <li><Link  to='/dashboard'>Intructor Dashboard</Link></li>
        <li><Link  to='/dashboard2'>Admin Dasboard</Link></li> 
        <li><Link  to='/dashboard3'>Student Dasboard</Link></li> 
        
        
        <li><button onClick={handleLogOut}>Log Out</button></li>
        <li><span className='text-lime-600'>UserName:{user?.displayName}</span></li>
        </>
         : <li><Link to='/login'>Login</Link></li>}



        
        
         </>
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-50">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItems}

                    </ul>
                </div>
                <div className='flex justify-between '>
                    <img className='w-14 h-14 p-2 space-x-3 rounded-full  '
                        src={logo} alt="" />

                    <a className="btn btn-ghost py-2 normal-case text-purple-800">
                        <span className='text-lg '>Pilates Butterfly</span>
                    </a>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItems}
                    
                </ul>
            </div>
            <div className="navbar-end flex flex-row">
                <div className='flex justify-between  '>
                    {user &&  <Link >
                    <div className="avatar w-1/2 mt-2 pe-3">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='w-[50px] h-[50px]' src={user.photo} />
                        </div>
                    </div>
                    </Link>}


                </div>
            </div>
        </div>
    );
};

export default Navbar;