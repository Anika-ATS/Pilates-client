import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const{googlepSignIn}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('bye',location);
    const from = location.state?.from?.pathname || '/';



    const handleGoogleSignIn=()=>{
        googlepSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, { replace: true });
        })

    }

    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                
                <div className="divider"></div>
                <p className="mx-auto text-fuchsia-950 font-bold mb-3">Social Sign in</p>
                <div className="mx-auto">
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary ">
                    <FaGoogle></FaGoogle>
                    </button></div>
                
            </div>
        </div>
    );
};

export default SocialLogin;