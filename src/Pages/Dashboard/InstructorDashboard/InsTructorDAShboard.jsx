// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProviders";
// import InsTructorClsEs from "../DisplayClsEs/InsTructorClsEs";
import useClasses from "../../../hooks/useClasses";
import DiaplayCls from "./DiaplayCls";


const InsTructorDAShboard = () => {
    const [MyClasses]=useClasses();

    return (
        <section>
        {MyClasses.map(cls=><DiaplayCls
         key={cls._id}
         cls={cls}
         ></DiaplayCls>
        
       
        )
        
        }

    </section>
        

    );
};

export default InsTructorDAShboard;