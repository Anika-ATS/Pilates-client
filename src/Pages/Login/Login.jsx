import { useContext } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate} from 'react-simple-captcha';

// import Swal from 'sweetalert2';
import login from '../../assets/classes/Login.webp';

import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// , useLocation, useNavigate, LoadCanvasTemplateNoReload, validateCaptcha 

import { AuthContext } from '../../Providers/AuthProviders';
import SocialLogin from '../Shared/Social Login/SocialLogin';

const Login = () => {
    // useEffect(() => {
    //     loadCaptchaEnginge(6); 
    // }, [])


    const { SignInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('bye',location);
    const from = location.state?.from?.pathname || '/';


    const handleOnLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;

        const password = form.password.value;

        console.log(password, email);

        // create user
        SignInUser(email, password)
            .then(result => {
                const LogInUser = result.user;
                console.log(LogInUser);
                navigate(from, { replace: true });
                // Swal.fire('Complete')


                <div className="toast toast-top toast-start">
                    
                    <div className="alert alert-success">
                        <span>Successfully logged in.</span>
                    </div>
                </div>




            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <figure className="px-5 pt-5 w-1/2 h-1/2">
                            <img src={login} alt="" className="rounded-xl" /></figure>
                        <h1 className="ps-5 text-xl font-bold">Haven't Any account?<br />You just click <Link className='link link:hover text-purple-800'
                            to='/register'>Register</Link> to create one!</h1>

                    </div>
                    {/* onSubmit={handleOnLogin()} */}
                    <form onSubmit={handleOnLogin} >
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                {/* captcha */}
                                {/* <div className="form-control">
                                <label className="label">
                                   <LoadCanvasTemplate />
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                               
                            </div> */}




                               
                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type='submit' value='Login' />
                                </div>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;


