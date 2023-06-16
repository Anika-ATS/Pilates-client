import  { useEffect, useState } from 'react';

const useApprovecls = () => {
 // const { user } = useContext(AuthContext);
 const [AproveClasses, setAproveClasses] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
     fetch("https://y-opal-kappa.vercel.app/ApproveCls")

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