import { useEffect, useState } from "react";
import SectionsTitle from "../../../Components/Titles/SectionsTitle";
import Instructor from "../../Shared/PopularInstructor/Instructor";
import Teacher from "./Teacher";


const PopularTeacher = () => {
    const [PopularT, setPopularT]=useState([]);
  
    useEffect(()=>{
        fetch("teacher.json")
      
            .then(res=>res.json())
            .then(data=>{
                const  PopularTeachers=data.filter(item=>item.Catagory=== 'Popular')
                setPopularT( PopularTeachers)
                // console.log( PopularTeachers)
            })
            
            .catch(error=>console.log(error))

     },[])
    return (
        <section>

            <SectionsTitle
               Heading="Meet Popular Instructors"
               subHeading="Instructors section"

            
            >
                
            </SectionsTitle>
            <div className="grid md:grid-cols-3 gap-4 py-4 mb-5 ">
            {/* {PopularT.length()} */}
                {
                   PopularT.map(item=><Instructor
                   key={item._id}
                   item={item}
                   
                   >

                   </Instructor> )
                   

                }
              

            </div>

        </section>
        
    );
};

export default PopularTeacher;