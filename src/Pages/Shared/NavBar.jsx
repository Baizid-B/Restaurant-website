import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { IoCart } from "react-icons/io5";
import useCart from "../../hooks/useCart/useCart";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import { GrUserAdmin } from "react-icons/gr";


const NavBar = () => {

    const [cart] = useCart()
    const {user, signOutUser} = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    
    const handleSignOut = () =>{
      signOutUser()
      .then(() =>{})
      .catch(error => console.log(error.message))
    }

    const link = <>
        <li><Link to='/'>Home</Link></li>
        <li><NavLink to='/contact'>Contact us</NavLink></li>
        {/* <li><NavLink to='/dashboard'>Dashboard</NavLink></li> */}
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/shop/salad'>Our Shop</NavLink></li>
        {/* <li><NavLink to='/secret'>secret</NavLink></li> */}

        {
          user && isAdmin && <li><NavLink to='/dashboard/admin'>Admin Home</NavLink></li>
        }

        {
          user && !isAdmin && <li><NavLink to='/dashboard/userHome'>User Home</NavLink></li>
        }


        { isAdmin ?
          <li> <NavLink to='/dashboard/users'><GrUserAdmin className="text-xl"></GrUserAdmin></NavLink></li>
          
          :
          <li> <NavLink to='/dashboard/myCart'><IoCart className="text-xl"></IoCart><div className="badge badge-secondary">+{cart.length}</div></NavLink></li>
        }
        
    </>

    return (
      
      <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-40 bg-black text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase">
                {link}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:!flex">
            <ul className="menu menu-horizontal px-1 uppercase">
              {link}
            </ul>
          </div>

          <div className="navbar-end uppercase">

            {
              user ? <>
              <div className="flex justify-center items-center gap-4">
                {/* <div className="flex gap-4">
                  <span>{user?.displayName}</span>
                  
                </div> */}
              <Link onClick={handleSignOut} to="/login"><button className="btn btn-ghost">Log Out</button></Link>
              <img className="w-[45px] h-[45px] rounded-full" src={user?.photoURL} alt="" />
              </div></> : <>
              <div className="flex justify-center items-center gap-6">
                <Link to="/signUp"><button className="btn">Sign Up</button></Link>
                <Link to="/login"><button className="btn">Login</button></Link>
                </div>
              </>
            }
          
          </div>

      </div>

    );
};

export default NavBar;