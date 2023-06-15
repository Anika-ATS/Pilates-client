
const NaddACls = () => {


    const handleOnSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        
        const name=form.name.value;
        const photo=form.photo.value;
        // const Iname=user.displayName;
        const Iname=form.Iname.value;
        const email=form.email.value;           
        const price=form.price.value;              
        const seat=form.seat.value;
        const status=form.status.value;
        
        const add={
            Iname,
            name,
            email,
            photo,                
            price,
            seat,status
      

        }
        // console.log(Sname,name,email, url,subCategory,price,stock,rating);
    
       console.log(add);
       fetch('http://localhost:5000/NAddaClass',{
           method:'POST',
           headers:{
              'content-type':'application/json'
           },
           body:JSON.stringify(add)
       })
       .then(res=>res.json())
            .then(data=> {
                console.log(data);
                if(data.insertedId)
                {
                    // swal("Good job!", "You Added a data successfully!", "success", {
                    //     button: "Aww yiss!",
                    //   });
                    alert('data added');
                }

            })
            
   
    }
    return (
        <div>
            
            <div className="bg-base-300 h-20 bg-gradient-to-r from-base-500 to-fuchsia-500">
            <h1 className='mt-5 pt-3  text-center text-lime-600 text-bold text-4xl hover:opacity-75 hover:bg-base-600 mb-5'>Add a Class </h1></div>
            {/* onSubmit={handleOnSubmit} */}
            <form onSubmit={handleOnSubmit} >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  " >
            
                
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" placeholder="class name" name='name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text ">Class Image</span>
                    </label>
                    <input type="url"  placeholder="Photo" name='photo' className="input input-bordered pt-2" />
                </div>
                
                

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text"  placeholder="Instructor Name" name='Iname' className="input input-bordered"  />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="text" placeholder="Instructor Email" name='email'  className="input input-bordered" />

                </div>
                {/* <div className="form-control">
                    <label className="label ">
                        <span className="label-text">Category</span>
                        
                    </label>
                    <input type="text" placeholder="Sub-category" name='subCategory' className="input input-bordered" />
                    
                </div> */}
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Price" name='price' className="input input-bordered" />

                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="text" placeholder="Seat" name='seat' className="input input-bordered" />

                </div>
                {/* //status */}
                <div className="form-control ">
                <label className="label">
                        <span className="label-text">Status</span>
                    </label>

                    <input placeholder="Pending"  type='text' name='status' className="input input-bordered" />
                </div>
                

                <div className="form-control mt-8 w-36">

                    <input className="btn btn-primary btn-block"  type='submit' value='Add a Class' />
                </div>
            </div>
           
            </form>
        </div>

    );
};



export default NaddACls;