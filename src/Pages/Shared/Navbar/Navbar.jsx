import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';
const Navbar = () => {
    const NavItems = <>
        <li><Link to='/' ><a>Home</a></Link></li>
        <li><Link to='/instructors'><a>Instructors</a></Link></li>

        <li><Link><a>Classes</a></Link></li>
        <li tabIndex={0}>
        <details>
          <summary>Dashboard</summary>
          <ul className="p-2 z-50">
            <li><Link><a>Student Dashboard</a></Link></li>
            <li><Link><a>Admin Dasboard</a></Link></li>
          </ul>
        </details>
      </li>
        {/* <li><a>Student Dashboard</a></li>
        <li><a>Admin Dasboard</a></li> */}
        <li><Link><a>Login</a></Link></li>
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
                    {/* {user &&  <Link > */}
                    <div className="avatar w-1/2 mt-2 pe-3">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={''} />
                        </div>
                    </div>
                    {/* </Link>} */}


                </div>
            </div>
        </div>
    );
};

export default Navbar;