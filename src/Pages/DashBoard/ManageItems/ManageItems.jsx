import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../compontents/SectionTitle/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { Link} from "react-router-dom";

const ManageItems = () => {
    const [menu,loading,refetch] = useMenu();
    const axiosSecure = useAxiosSecure()


    const handleUpdate = (item) =>{

    }

    const handleDelete = (item) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    // refetch to update the api 
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${item.name} has been deleted `,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
          });
        
    }
    return (
        <>
           <div>
                <Helmet>
                    <title>Bistro Boss | Manage Items</title>
                </Helmet>
                <SectionTitle
                    subHeading="Hurry Up!"
                    Heading='MANAGE ALL ITEMS'
                ></SectionTitle>
           </div>

           <h1 className="ml-16 mb-6 font-semibold text-2xl">Total item: {menu.length}</h1>
           <div className="overflow-x-auto px-4 ml-12 mb-10">

                <table className="table">

                    {/* head */}
                    <thead className="bg-[#d1a054] text-white font-bold text-base">
                        <tr>
                           <th> </th>
                           <th>ITEM IMAGE</th>
                           <th>ITEM NAME</th>
                           <th>PRICE</th>
                           <th>UPDATE</th>
                           <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            menu.map((item,index) => <tr key={item._id} > 

                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
    
                                <td>{item.name}</td>
    
                                <td> ${item.price}</td>
    
                                <th>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button
                                        onClick={() => handleUpdate(item)}
                                        className="btn 
                                        bg-[#d1a054] 
                                        text-white 
                                        text-xl"><FaRegEdit
                                        /></button>
                                    </Link>
                                </th>
                                <th>
                                    <button
                                    onClick={() => handleDelete(item)}
                                    className="btn 
                                    bg-red-600 
                                    text-white text-xl"><RiDeleteBin6Line 
                                    /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
           </div>
        </>
    );
};

export default ManageItems;