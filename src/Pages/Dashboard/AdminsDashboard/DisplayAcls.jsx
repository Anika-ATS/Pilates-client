import Swal from 'sweetalert2'
//show all the cls before approved
const DisplayAcls = ({ cls2 }) => {
    const { _id, Iname, name, email, photo, price, seat, status } = cls2;


    const handleApprove = cls2=> {

        fetch('https://y-opal-kappa.vercel.app/ApproveCls',{
            method:'POST',
            headers:{
               'content-type':'application/json'
            },
            body:JSON.stringify(cls2)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        })

    }
    return (
        <div>
            <div className="hero h-[500px]  mx-auto bg-base-200 mt-7 mb-7 ">
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
                        <div className="flex gap-2">
                        <button onClick={() => handleApprove(cls2)} className="btn btn-primary">Approved</button>

                        {/* onClick={() => handleApprove(cls2)} */}




                        <button className="btn btn-primary ">Denied</button>
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn btn-primary "  onClick={() => window.my_modal_5.showModal()}>Feedback</button></div>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box">
                                
                                <p className="py-4">There is somthing wrong</p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayAcls;