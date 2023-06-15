import useAllClasses from "../../../hooks/useAllClasses";
import DisplayAcls from "./DisplayAcls";
// import DisplayAcls from "./DisplayAcls";


const AdminClasses = () => {
    const [AdminClasses] = useAllClasses();
    return (

       <section>
         {AdminClasses.map(cls2=><DisplayAcls
         key={cls2._id}
         cls2={cls2}
         ></DisplayAcls>
        
       
        )
        
        }



       </section>


    );
};

export default AdminClasses;