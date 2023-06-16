import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const useClasses = () => {
    const { user } = useContext(AuthContext);
    const [MyClasses, setMyClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const url = `https://y-opal-kappa.vercel.app/NAddaClass?email=${user?.email}`;

    useEffect(() => {
        fetch(url)

            .then(res => res.json())
            .then(data =>{ setMyClasses(data)
            ,   setLoading(false)})

            .catch(error => console.log(error))

    }, [url]);
    return [MyClasses,loading]
};

export default useClasses;