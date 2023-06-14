
const Instructor = ({item}) => {
    const{name,picture, email,Class}=item;
    return (
        <div className="flex space-x-4">
            <figure className="px-3 pt-5">
            <img className="object-cover w-[80px] h-[80px] mt-0"  src={picture}  alt="" />
            </figure>
            <div className="mt-7">
                <h3 className="3xl text-lime-600">Name:{name}</h3>
                <p>Email:{email}</p>
                <p>Class:{Class}</p>
            </div>
                 
            
            
        </div>
    );
};

export default Instructor;