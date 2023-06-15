
import { useEffect, useState } from "react";
const useAllClasses = () => {
    // const { user } = useContext(AuthContext);
    const [AdminClasses, setAdminClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/NAddaClass")

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