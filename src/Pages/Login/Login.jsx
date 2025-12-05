
import { useContext, useEffect, useState } from "react";
import loginImg from "../../../src/assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";



const Login = () => {

    const [disable, setDisable] = useState(true);
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic();


    const from = location.state?.from?.pathname || "/"
    // console.log('state in the location login page', location.state)

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        // firebase work ---- signIn 
        signInUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });

        })
    }

    const handleValidate = (e) =>{
        const user_captacher_value = e.target.value;

        if (validateCaptcha(user_captacher_value)) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }


    return (
        <>
            <Helmet>
                <title>
                    Bistro Boss | Login
                </title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="bgc hero-content flex-col md:flex-row shadow-2xl shadow-black">

                    <div className="text-center md:w-1/2">
                        <img src={loginImg} alt="" />
                    </div>

                    <div className="card md:w-1/2 max-w-sm">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* capture */}

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleValidate} name="captcha" placeholder="Type the captcha above" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>

                        
                        <div className="text-center">
                            <p className="font-semibold text-[#d1a054]">New Here?  
                                <Link className="font-bold" to='/signUp'> Create a New Account</Link>
                            </p>
                        </div>

                        {/* signin with google and anyAccount */}
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;