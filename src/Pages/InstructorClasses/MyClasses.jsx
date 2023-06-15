import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import InsTructorClsEs from "../DisplayClsEs/InsTructorClsEs";




const MyClasses = () => {

    const { user } = useContext(AuthContext);
    const [MyClasses, setMyClasses] = useState([]);

    const url = `http://localhost:5000/addAclass?email=${user.email}`;

    useEffect(() => {
        fetch(url)

            .then(res => res.json())
            .then(data => setMyClasses(data))

            .catch(error => console.log(error))

    }, [url]);

    return (

        <section>
            {MyClasses.map(cls=><InsTructorClsEs
             key={cls._id}
             cls={cls}
            
            ></InsTructorClsEs>
            )
            
            }
           
            
            
            
            

           
                
                
                
                
             

            
        </section>
        
    );
};

export default MyClasses;
