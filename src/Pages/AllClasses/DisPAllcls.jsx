import Swal from 'sweetalert2'

const DisPAllcls = ({Acls}) => {
    const {_id, Iname,name,photo,price,seat} = Acls;

  
    const handleApprove =Acls=> {

        fetch('https://y-opal-kappa.vercel.app/SelectCls',{
            method:'POST',
            headers:{
               'content-type':'application/json'
            },
            body:JSON.stringify(Acls)
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
                <div  className=" hero-content flex-col lg:flex-row-reverse">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className=" text-3xl font-bold mt-3 text-lime-600 mb-3">Class Name:{name}</h1>
                        <p className="text-2xl py-2">Instructor Name:{Iname}</p>
                       
                        <p className=" text-2xl py-2">Available Seat:{seat}</p>
                        <p className=" text-2xl py-2">Course Price:{price}</p>
                        {/* select  for add to cart */}
                        <button onClick={() => handleApprove(Acls)} className="btn btn-primary">Select</button>
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