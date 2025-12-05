import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth/useAuth";


const UserHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Admin Home
                </title>
            </Helmet>

            <h1 className="uppercase p-8 text-3xl font-semibold">
                <span>Hi, Welcome Back! </span> 
                {
                    user?.displayName ? user?.displayName : 'Back!'
                }
            </h1>
        </div>
    );
};

export default UserHome;