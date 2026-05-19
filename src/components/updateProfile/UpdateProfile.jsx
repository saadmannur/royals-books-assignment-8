"use client"
import React from 'react';
import { Button, Modal } from '@heroui/react';
import { useForm } from 'react-hook-form';

const UpdateProfile = ({ handleLoginFunc }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (

        <Modal>
            <Button className='btn bg-[#012e4a] text-white'>Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Update your profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit(handleLoginFunc)}>
                                <fieldset className="fieldset">
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
                                    <Button className="w-full my-3" slot="close" type='submit'>
                                        Continue
                                    </Button>
                                </fieldset>
                            </form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>

    );
};

export default UpdateProfile;