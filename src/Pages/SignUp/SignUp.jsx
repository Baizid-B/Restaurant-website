
import loginImg from "../../../src/assets/others/authentication2.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


    const SignUp = () => {

        const navigate = useNavigate()
        const {register,handleSubmit,formState: { errors }, reset} = useForm()
        const { creatUser, updateUserProfile } = useContext(AuthContext)
        const axiosPublic = useAxiosPublic()

        const onSubmit = data => {

            reset();
            creatUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(data.name, data.photo)
                .then(()=>{
                    // creat user entry in the database
                    const userInfo = {
                        name : data.name,
                        email: data.email,
                        password: data.password
                    }
                    axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            reset()
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "created user successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })
                 })
            })

        }

        return (
            <>
                <Helmet>
                    <title>Bistro Boss | Sign UP</title>
                </Helmet>
                <div className="hero min-h-screen">
                    <div className="bgc hero-content flex-col md:flex-row-reverse shadow-2xl shadow-black">
                
                        <div className="text-center md:w-1/2">
                            <img src={loginImg} alt="" />
                        </div>
                
                        <div className="card md:w-1/2 max-w-sm">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required.*</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photo && <span className="text-red-600">Photo URL is required.*</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required.*</span>}
                                </div>
                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", 
                                    { required: true,
                                    minLength:6 ,
                                    maxLength: 20,
                                    pattern:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,20}$/,
                                    })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required.*</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less 20 characters</span>}
                                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have  one Uppercase one lowercase , one number and one special characters</span>}
                                </div>
                
                                <div className="form-control w-full mt-6">
                                    <input className="btn btn-primary" type="submit" value="SignUp" />
                                </div>
                            </form>
                            <div className="text-center">
                                <p className="font-semibold text-[#d1a054]">Already registered?  
                                    <Link className="font-bold" to='/login'> Go to log in</Link>
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

    export default SignUp;