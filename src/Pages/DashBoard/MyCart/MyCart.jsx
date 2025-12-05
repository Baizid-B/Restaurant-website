import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../compontents/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart,refetch] = useCart()
    const totalPrice = cart.reduce((total, items) => total + items.price, 0)
    const axiosSecure = useAxiosSecure()

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
                    axiosSecure.delete(`/carts/${id}`)
                    .then(res =>{
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }
                        
                })
                }
              });

    }

    return (
        <>
            <div className="mb-12">
                <div>
                    <Helmet>
                        <title>
                            Bistro Boss | DashBoard | My Cart
                        </title>
                    </Helmet>
                    <SectionTitle
                        subHeading='My Cart'
                        Heading='WANNA ADD MORE?'
                    ></SectionTitle>
                </div>

                <div className="p-8 flex justify-evenly items-center font-bold tracking-wider">
                    <h1 className="uppercase text-2xl">Total orders: {cart.length}</h1>
                    <h1 className="uppercase text-2xl">total price: ${totalPrice}</h1>
                    {cart.length ? <Link to='/dashboard/payment'>
                        <button className="btn btn-primary uppercase">pay</button>
                    </Link>: <button disabled className="btn btn-primary uppercase">pay</button>}
                </div>

                {/* Table Design */}
                <div className="overflow-x-auto ml-28">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item,index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
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
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>$ {item.price}</td>
                                    <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-red-600 text-white text-lg"><RiDeleteBin6Line /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default MyCart;