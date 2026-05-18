"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(errors);

    const handleLoginFunc = (data) => {
        console.log(data);
    };
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='flex justify-center mt-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-center text-3xl font-semibold my-5'>Login Your Account</h2>
                    <form onSubmit={handleSubmit(handleLoginFunc)}>
                        <fieldset className="fieldset relative">
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
                                type={ showPassword ? "text" : "password"}
                                className="input"
                                placeholder="Password"
                            />
                            <span
                                className='absolute top-29 right-4 cursor-pointer'
                                onClick={()=> setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ?
                                        <span className='text-xl'><FaEye /></span> :
                                        <span className='text-xl'><FaEyeSlash /></span>
                                }
                            </span>
                            <p className='text-red-500'>{errors.password?.message}</p>

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-[#036280] text-white mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className='text-center my-5'>
                        Dont Have An Account ?
                        <span className='text-[#036280] font-bold'>
                            <Link href={"/register"}> Register</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;