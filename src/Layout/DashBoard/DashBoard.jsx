import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHouseUser } from "react-icons/fa";
import { FaCalendarDays, FaHouse } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import useCart from '../../hooks/useCart/useCart';
import { ImSpoonKnife } from "react-icons/im";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import useAdmin from '../../hooks/useAdmin/useAdmin';




const DashBoard = () => {
    const [cart] = useCart();

    // todo: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className='flex '>
            
            <div className='w-64 bg-[#d1a054] min-h-screen uppercase'>
                <div className='ml-6 mb-10 mt-8 space-y-1 '>
                    <h1 className='text-3xl font-bold'>Bistro Boss</h1>
                    <p className='text-xl tracking-widest'>Resturent</p>
                </div>
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/admin'><FaHouseUser /> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItems'><ImSpoonKnife /> add items</NavLink></li>
                            <li><NavLink to='/dashboard/manageItem'><MdMenu /> manage items</NavLink></li>
                            <li><NavLink to='/dashboard/manageBooking'><BiSolidFoodMenu /> Manage bookings</NavLink></li>
                            <li><NavLink to='/dashboard/users'><FaUsers /> all users</NavLink></li>
                        </>
                        :
                        <>
                            <li><NavLink to='/dashboard/userHome'><FaHouseUser /> User Home</NavLink></li>
                            {/* <li><NavLink to='/dashboard/payment'><FaCalendarDays /> reservation</NavLink></li> */}
                            <li><NavLink to='/dashboard/history'><MdPayments /> payment history</NavLink></li>
                            <li><NavLink to='/dashboard/myCart'><IoCart /> My Cart ({cart.length})</NavLink></li>
                            <li><NavLink to='/dashboard/review'><MdReviews /> add review</NavLink></li>
                            <li><NavLink to='/dashboard/booking'><FaCalendarCheck /> my booking</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHouse /> Home</NavLink></li>
                    <li><NavLink to='/menu'><IoMenu /> Menu</NavLink></li>
                    <li><NavLink to='/shop/salad'><FaShoppingBag /> Shop</NavLink></li>
                    <li><NavLink to='/contact'><MdContacts /> Contact</NavLink></li>
                </ul>
            </div>
            
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;