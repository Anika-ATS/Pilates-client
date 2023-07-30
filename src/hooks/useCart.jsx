
import  { useEffect, useState } from 'react';
const useCart = () => {
    const [CartClasses, setCartClasses] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
     fetch("https://y-opal-kappa.vercel.app/SelectCls")

         .then(res => res.json())
         .then(data =>{
            setCartClasses(data);
             setLoading(false)
         } )



         .catch(error => console.log(error))
 }, [])
 return [CartClasses,loading]
};

export default useCart;