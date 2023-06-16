
import { useEffect, useState } from "react";
const useAllClasses = () => {
    // const { user } = useContext(AuthContext);
    const [AdminClasses, setAdminClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://y-opal-kappa.vercel.app/NAddaClass")

            .then(res => res.json())
            .then(data =>{
                setAdminClasses(data);
                setLoading(false)
            } )



            .catch(error => console.log(error))
    }, [])
    return [AdminClasses,loading]
};

export default useAllClasses;