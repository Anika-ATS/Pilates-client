
import SectionsTitle from "../../../Components/Titles/SectionsTitle";
import Instructor from "../../Shared/PopularInstructor/Instructor";
import useInstructors from "../../../hooks/useInstructors";



const PopularTeacher = () => {
   
    const [AllT]=useInstructors();
    const PopularT=AllT.filter(item=>item.Catagory=== 'Popular')
    return (
        <section>

            <SectionsTitle
               Heading="Meet Popular Instructors"
               subHeading="Instructors section"

            
            >
                
            </SectionsTitle>
            <div className="grid md:grid-cols-3 gap-4 py-4 mb-5 ">
         
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