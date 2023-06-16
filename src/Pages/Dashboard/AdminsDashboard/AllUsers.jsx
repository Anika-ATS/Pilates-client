import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield,FaChalkboardTeacher } from "react-icons/fa";
import Swal from 'sweetalert2'

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        console.log(res)
        return res.json();
    })
    //dlete user
    const handleDelete = user => {

    }

    //handle admin
    const handleAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, { method: 'PATCH' })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                      })

                }
            })
    }
  //handle instructor
   const handleInstructor= user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, { method: 'PATCH' })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount) {
                refetch();
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an instructor now`,
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
        })
}





    return (
        <div>
            <h2 className="bg-base-200  text-2xl text-fuchsia-950 font-bold">
                <span className="content-center">Website Users: {users.length}</span></h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        {/* img */}
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td><div className="flex items-center space-x-3">
                                        {/*admin btn */}
                                        
                                         <div>
                                         {user.role === 'admin' ? 'admin' :
                                   
                                          <button onClick={() => handleAdmin(user)}
                                           className="btn btn-ghost bg-blue-500 text-white btn-xs ">

                                           <FaUserShield></FaUserShield>
                                         </button>}
                                         </div>
                                         {/* instructor btn */}
                                         <div>
                                         {user.role === 'instructor' ? 'instructor' :
                                   
                                         <button onClick={() => handleInstructor(user)}
                                          className="btn btn-ghost bg-blue-500 text-white btn-xs ">

                                          <FaChalkboardTeacher></FaChalkboardTeacher>
                                         </button>}


                                         </div>
                                    </div>
                                   
                                        
                                        
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)}
                                            className="btn btn-ghost bg-red-500 text-white btn-xs ">

                                            <FaTrashAlt></FaTrashAlt>

                                        </button></td>
                                    {/* <th>
                                
                            </th> */}
                                </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;