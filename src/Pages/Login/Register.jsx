import { useForm } from "react-hook-form";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import registerPic from '../../assets/classes/register.jpg';


const Register = () => {
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm();
       const navigate=useNavigate();
       const {createUser,udateUserProfile,logOut}=useContext(AuthContext);


    const onSubmit = (data) =>{ 
        // console.log(data),
        //create user
         createUser(data.email,data.password)
            .then(result=>{
                const createdUser=result.user;
                console.log(createdUser);
                udateUserProfile(data.name,data.photo)
                .then(() => {
                   
                    // created user manage  in db
                    const saveUser={name:data.name,email:data.email,photo:data.photo}
                    // console.log(saveUser)
                    fetch('https://y-opal-kappa.vercel.app/users',{
                        method:'POST',
                        headers:{
                           'content-type':'application/json'
                        },
                        body:JSON.stringify(saveUser)
                    }
                    
                    
                    
                    )
                    .then(res=>res.json())
                    .then(data=>{

                        if(data.insertedId){
                            // console.log('Profile updated!');
                            reset();
                            logOut()
                            .then(()=>{
                                navigate ('/login');
                            })
                            .catch(error => console.log(error));



                        }
                    })
  
                  })
                  .catch(error =>  console.log(error));
                    
            })
            .catch(error=>{
                console.log(error);
            })
    
    
    
    }



 
    //getting form value
    // const handleSignUp= event =>{
    //     event.preventDefault();
    //     const form=event.target;
    //     const name=form.name.value;
    //     const email=form.email.value;

    //     const password=form.password.value;
    //     const photo=form.photo.value;

    //    console.log(name,password,email, photo);

    //     //create user
    //      createUser(email,password)
    //         .then(result=>{
    //             const createdUser=result.user;
    //             console.log(createdUser);
    //         })
    //         .catch(error=>{
    //             console.log(error);
    //         })
    //    }






    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <figure className="px-5 pt-5"> <img src={registerPic} alt="" className="rounded-xl" />
                    </figure>
                    <h1 className="ps-5 text-xl font-bold">Have an account?<br />You just click <Link className='link link:hover text-purple-800' to='/login'>Login</Link> for Sign-in!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form   onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control ">
                           
                            <input type="text"  {...register("name", { required: true })}  placeholder="Name" name='name' className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>

                        {/* email */}
                        <div className="form-control">
                           
                                <input type="email" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>

                        {/* password */}
                        <div className="form-control">                          
                            <input type="password" {...register("password", {
                                required: true,
                                minLength:6 ,
                                maxLength:10,
                                pattern:/(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9].*[0-9].*[0-9])(?=.*[a-z])/   })} placeholder="Password" name='password' className="input input-bordered" />
                                 {errors.password && <span className="text-red-600">This field is required</span>}
                                {errors.password?.type === "minLength" && (
                                 <p role="alert"  className="text-red-600">Password is less then 6 Characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                 <p role="alert" className="text-red-600">Must have One Capital letter, one special character ,3digit and one small letter </p>
                                )}
                           
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                         {/* Confirmpassword */}
                         <div className="form-control">                          
                            <input type="password" {...register("Confirmpassword", { required: true, minLength:6 , maxLength:10})} placeholder="Confirmpassword" name='Confirmpassword' className="input input-bordered" />
                            {errors.Confirmpassword && <span className="text-red-600">This field is required</span>}
                            
                        </div>

                        {/* photourl */}
                        <div className="form-control">                                          
                            <input type="url" {...register("photo", { required: true })} placeholder="Photo" name='photo' className="input input-bordered" />
                            {errors.photo && <span className="text-red-600">This field is required</span>}
                        </div>



                        <div className="form-control mt-6">
                            <input  className="btn btn-primary"  type='submit'  value='Sign In' />
                                {/* <button className="btn btn-primary">Sign In</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div >




    );
};

export default Register;