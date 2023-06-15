
import { useEffect, useState } from "react";
const useAllClasses = () => {
    // const { user } = useContext(AuthContext);
    const [MyClasses, setMyClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/NAddaClass")

            .then(res => res.json())
            .then(data =>{
                setMyClasses(data);
                setLoading(false)
            } )



            .catch(error => console.log(error))
    }, [])
    return [MyClasses,loading]
};

export default useAllClasses;