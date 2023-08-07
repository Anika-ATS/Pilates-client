import Swal from 'sweetalert2'
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// , loggedIn, role
const DisPAllcls = ({ Acls }) => {
    const { _id, Iname, name, photo, price, seat } = Acls;
    // const navigate = useNavigate();



    // const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    // useEffect(() => {
    //     // Disable the button if available seats are 0
    //     if (seat === 0) {
    //         setIsButtonDisabled(true);
    //     }

    //     // If the user is logged in as admin or instructor, disable the button
    //     if (loggedIn && (role === 'admin' || role === 'instructor')) {
    //         setIsButtonDisabled(true);
    //     }
    // }, [seat, loggedIn, role]);


    const handleSelect = Acls => {

        fetch('https://y-opal-kappa.vercel.app/SelectCls', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Acls)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
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
    //             else {
    //                 // Handle the case where data.insertedId is falsy or not present
    //                 // This could mean an error occurred or the response was unexpected
    //                 Swal.fire({
    //                     icon: 'error',
    //                     title: 'Oops...',
    //                     text: 'Something went wrong!',
    //                 });
    //                 navigate('/login');
    //             }

    //         })
    //         .catch(error => {
    //             // Handle any errors that occurred during the fetch operation
    //             console.error('Error:', error);
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: 'Something went wrong! Please login',
    //             });
           

    //         });

    // }
    // const handleApprove = (Acls) => {
    //     fetch('https://y-opal-kappa.vercel.app/SelectCls', {
    //       method: 'POST',
    //       headers: {
    //         'content-type': 'application/json',
    //       },
    //       body: JSON.stringify(Acls),
    //     })
    //       .then((res) => {
    //         if (!res.ok) {
    //           throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
    //         }
    //         return res.json();
    //       })
    //       .then((data) => {
    //         console.log(data);
    //         if (data.insertedId) {
    //           Swal.fire({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: 'Your work has been saved',
    //             showConfirmButton: false,
    //             timer: 1500,
    //           });
    //         }
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching data:', error.message);
    //       });
    //   };
      


   
    return (
        <div>
            {/* ${seat === 0 ? 'bg-red-500' : ''
                }`}s */}
           <div className="hero h-[500px] mx-auto bg-base-200 mt-7 mb-7 ">
            <div className=" hero-content flex-col lg:flex-row-reverse">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className=" text-3xl font-bold mt-3 text-lime-600 mb-3">Class Name:{name}</h1>
                    <p className="text-2xl py-2">Instructor Name:{Iname}</p>

                    <p className=" text-2xl py-2">Available Seat:{seat}</p>
                    <p className=" text-2xl py-2">Course Price:{price}</p>
                    {/* select  for add to cart */}
                    <button onClick={() => handleSelect(Acls)} className="btn btn-primary">Select</button>






                    {/* <button onClick={handleApprove} className="btn btn-primary" disabled={isButtonDisabled}>
                        {loggedIn && (role === 'admin' || role === 'instructor')
                            ? 'Admin/Instructor: Not Available'
                            : seat === 0
                                ? 'Not Available'
                                : 'Select'}
                    </button> */}







                    {/* <input onClick={() => handleApprove(select)}
                        className=" btn btn-primary btn-block text-xl"                         
                        type='submit'
                        value='Select'
                         />            */}

                </div>
            </div>
        </div>
    </div>

        
    );
};

export default DisPAllcls;