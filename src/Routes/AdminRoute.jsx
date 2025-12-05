
import useAdmin from "../hooks/useAdmin/useAdmin";
import useAuth from "../hooks/useAuth/useAuth";
import { Navigate, replace, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const {user , loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()


    if (loading || isAdminLoading) {
        return (<div className='flex justify-center items-center mt-72'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>)
    }


    if (user && isAdmin) {
        return children;
    }
    
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;