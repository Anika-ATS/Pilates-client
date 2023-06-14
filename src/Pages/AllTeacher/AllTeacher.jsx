
const AllTeacher = ({item1}) => {
    const{name,picture, email,Class,Catagory}=item1;
    return (
        <div className="flex space-x-4">
            <figure className="px-3 pt-5">
            <img className="object-cover w-[150px] h-[150px] mt-0"  src={picture}  alt="" />
            </figure>
            <div className="mt-7">
                <h3 className="3xl text-lime-600">Name:{name}</h3>
                <p>Email:{email}</p>
                <p>Class:{Class}</p>
                <p>Catagory:{Catagory}</p>
            </div>
                 
            
            
        </div>
    );
};

export default AllTeacher;