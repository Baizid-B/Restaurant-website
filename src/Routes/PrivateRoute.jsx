
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center items-center mt-72'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate> 
};

export default PrivateRoute;