import  { useEffect, useState } from 'react';

const useApprovecls = () => {
 // const { user } = useContext(AuthContext);
 const [AproveClasses, setAproveClasses] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
     fetch("http://localhost:5000/ApproveCls")

         .then(res => res.json())
         .then(data =>{
            setAproveClasses(data);
             setLoading(false)
         } )



         .catch(error => console.log(error))
 }, [])
 return [AproveClasses,loading]
};

export default useApprovecls;