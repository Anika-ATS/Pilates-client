

const DiaplayCls = ({cls}) => {
    const {_id, Iname,name,email,photo,price,seat,status } = cls;
    return (
        <div>
            <div className="hero h-[500px]  mx-7 bg-base-200 mt-7 mb-7 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold mt-3 text-lime-600 mb-3">Class Name:{name}</h1>
                        <p className="text-2xl py-2">Instructor Name:{Iname}</p>
                        <p className="text-2xl py-2">Instructor Email:{email}</p>
                        <p className="text-2xl py-2">Available Seat:{seat}</p>
                        <p className="text-2xl py-2">Course Price:{price}</p>
                        <p className="text-2xl py-2">Satus:{status}</p>
                        <p className="text-2xl py-3">Enroll Students:</p>
                        <p className="text-2xl py-3">Feedback:</p>                       
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiaplayCls;