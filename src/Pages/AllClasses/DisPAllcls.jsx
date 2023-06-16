

const DisPAllcls = ({Acls}) => {
    const {_id, Iname,name,photo,price,seat} = Acls;
    return (
        <div>
            <div className="hero h-[500px]  mx-auto bg-base-200 mt-7 mb-7 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold mt-3 text-lime-600 mb-3">Class Name:{name}</h1>
                        <p className="text-2xl py-2">Instructor Name:{Iname}</p>
                       
                        <p className="text-2xl py-2">Available Seat:{seat}</p>
                        <p className="text-2xl py-2">Course Price:{price}</p>
                       
                       
                                              
                        <button className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisPAllcls;