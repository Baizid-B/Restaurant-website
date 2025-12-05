import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../compontents/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { useEffect } from "react";


const AllUser = () => {

    const axiosSecure = useAxiosSecure()

    const {data: users = [], refetch} = useQuery({
        queryKey : ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleDelete = id =>{
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.delete(`/users/${id}`)
                        .then(res =>{
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                            
                    })
                    }
                  });
    
    }

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`users/admin/${user._id}`)
        .then(res =>{
            if (res.data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <>
            <div className="mb-12">
                <div>
                    <Helmet>
                        <title>
                            Bistro Boss | DashBoard | All User
                        </title>
                    </Helmet>
                    <SectionTitle
                        subHeading='How many??'
                        Heading='MANAGE ALL USERS'
                    ></SectionTitle>
                </div>

                <div className="p-8 font-semibold tracking-wider">
                    <h1 className="uppercase text-2xl">Total users: {users.length}</h1>
                </div>
                {/* Table Design */}
                                
                    <div className="overflow-x-auto ml-28">
                        <table className="table">
                            {/* head */}
                                <thead>
                                    <tr className="uppercase">
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>role</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        users.map((user,index) => <tr key={user._id}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                {user.name}
                                            </td>
                                            <td>
                                                {user.email}
                                            </td>
                                            <td>
                                                {
                                                    user.role === 'admin' ? 'Admin' : <button 
                                                    onClick={() => handleMakeAdmin(user)} 
                                                    className="bg-orange-400 text-lg btn btn-md text-white"><FaUsers />
                                                    </button>
                                                }
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(user._id)} className="btn bg-red-600 text-white text-lg"><RiDeleteBin6Line /></button>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                        </table>
                    </div>
            </div>
        </>
    );
};

export default AllUser;