import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic/useAxiosPublic';

const SocialLogin = () => {
    const{ googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res =>{
            const userInfo = {
                email: res.user?.email,
                name:res.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(result =>{
                navigate('/')
            })
        })
    }


    return (
        <div className="text-center mb-4">
            <p className="text-sm text-gray-600 my-4">Or sign up with</p>

            <div className="flex flex-row justify-center items-center gap-12">
                <BiLogoFacebook className="cursor-pointer border-2 text-4xl rounded-full p-2 border-black"></BiLogoFacebook>
                <FaGoogle onClick={handleGoogleSignIn} className="cursor-pointer border-2 text-4xl rounded-full p-2 border-black"></FaGoogle>
                <AiFillGithub className="cursor-pointer border-2 text-4xl rounded-full p-2 border-black"></AiFillGithub>
            </div>

        </div>
    );
};

export default SocialLogin;