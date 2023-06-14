
import AllTeacher from "../../AllTeacher/AllTeacher";
import useInstructors from "../../../hooks/useInstructors";

const Teacher = () => {
   
    const [AllT]=useInstructors();
    return (
        <div className="grid md:grid-cols-3 gap-4 py-4 mb-5 ">

            {
                AllT.map(item1 => <AllTeacher
                    key={item1._id}
                    item1={item1}
                    ></AllTeacher>

                

                 )


            }


        </div>
    );
};

export default Teacher;