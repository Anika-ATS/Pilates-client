import { useEffect, useState } from "react";


const useInstructors = () => {
    const [AllT, setAllT] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/instructors")

            .then(res => res.json())
            .then(data =>{
                setAllT(data);
                setLoading(false)
            } )



            .catch(error => console.log(error))
    }, [])
    return [AllT,loading]
};

export default useInstructors;