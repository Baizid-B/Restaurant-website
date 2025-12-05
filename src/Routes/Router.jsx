import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import errerMessageImg from "../../src/assets/404.gif";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUser from "../Pages/DashBoard/All User/AllUser";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems/manageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'/menu',
          element:<OurMenu></OurMenu>,
        },
        {
          path:'/shop/:category',
          element:<OurShop></OurShop>,
          // loader: () => fetch('https://bistro-boss-server-wine-nine.vercel.app/menuCount') /* pagination related work---2*/
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        },
        {
          path:'*',
          element: <div className="flex justify-center mb-12"><img src={errerMessageImg} alt="Error Message" /></div>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>,
        },
        {
          path:'payment',
          element:<Payment></Payment>,
        },
        {
          path:'history',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'myCart',
          element:<MyCart></MyCart>,
        },

        // admin route setup
        {
          path:'admin',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>,
        },
        {
          path:'users',
          element:<AdminRoute><AllUser></AllUser></AdminRoute>,
        },
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>,
        },
        {
          path:'manageItem',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>,
        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`https://bistro-boss-server-wine-nine.vercel.app/menu/${params.id}`)
        },
        
      ]
    },
  ]);
  