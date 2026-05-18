"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(errors);

    const handleLoginFunc = (data) => {
        console.log(data);
    };
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='flex justify-center mt-5'>
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
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;