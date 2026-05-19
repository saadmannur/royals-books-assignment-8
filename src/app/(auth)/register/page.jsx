"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginFunc = async (data) => {
        // console.log(data);
        const { name, email, photo, password } = data;

        const {data:res , error} = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        console.log('signup response', {res, error})

        if(error){
            toast.error(error.message,{
                position: "top-center",
            })
        }
        if(res){
            toast.success("Sign up successful",{
                position: "top-center",
            })
            redirect("/login")
        }
    };
    
    const [showPassword, setShowPassword] = useState(false);

    const handleGoogleSignIn =  async () => {
            const data = await authClient.signIn.social({
                provider: "google",
            });
        }

    return (
        <div className='flex justify-center mt-1'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-center text-3xl font-semibold my-5'>Register an Account</h2>
                    <form onSubmit={handleSubmit(handleLoginFunc)}>
                        <fieldset className="fieldset relative">
                            <label className="label">Name</label>
                            <input
                                {...register("name", {
                                    required: "This is required"
                                })}
                                type="name"
                                className="input"
                                placeholder="Name"
                            />
                            <p className='text-red-500'>{errors.name?.message}</p>

                            <label className="label">Photo Url</label>
                            <input
                                {...register("photo", {
                                    required: "This is required"
                                })}
                                type="text"
                                className="input"
                                placeholder="Photo url"
                            />
                            <p className='text-red-500'>{errors.photo?.message}</p>

                            <label className="label">Email</label>
                            <input
                                {...register("email", {
                                    required: "This is required"
                                })}
                                type="email"
                                className="input"
                                placeholder="Email"
                            />
                            <p className='text-red-500'>{errors.email?.message}</p>

                            <label className="label">Password</label>
                            <input
                                {...register("password", {
                                    required: "This is required",
                                    minLength: {
                                        value: 8,
                                        message: "Minimum length 8"
                                    }
                                })}
                                type={showPassword ? "text" : "password"}
                                className="input"
                                placeholder="Password"
                            />
                            <span
                                className='absolute top-68 right-4 cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ?
                                        <span className='text-xl'><FaEye /></span> :
                                        <span className='text-xl'><FaEyeSlash /></span>
                                }
                            </span>
                            <p className='text-red-500'>{errors.password?.message}</p>

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-[#036280] text-white mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className='text-center mt-3'>
                        Already Have An Account ?
                        <span className='text-[#036280] font-bold'>
                            <Link href={"/login"}> Login</Link>
                        </span>
                    </p>
                    <div className='text-center'>
                        <p className=' text-gray-500 mb-2'>Or, Register with</p>
                        <button
                            onClick={handleGoogleSignIn}
                        className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                             Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;