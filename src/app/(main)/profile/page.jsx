"use client"
import UpdateProfile from '@/components/updateProfile/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const ProfilePage = () => {

    const { data } = authClient.useSession();

    const [profile, setProfile] = useState(null);

    useEffect(()=>{
        if(data?.user){
            setProfile(data.user)
        }
    }, [data])

    // const user = data?.user;
    // console.log(user);

    const handleLoginFunc = (formData) => {
        const updateUser = {
            ...profile,
            name: formData.name,
            email: formData.email,
            image: formData.photo
        }
        setProfile(updateUser)
    }

    if (!profile) {
        return <span className="loading loading-spinner loading-md"></span>
    }


    return (
        <div className='flex justify-center'>
            <div className='my-10 space-y-5'>
                <h2 className='text-center text-3xl font-bold text-[#012e4a]'>Your Profile Information</h2>
                <div>
                    <Image
                        src={profile.image}
                        alt="something"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto w-[200] h-[200]'
                    ></Image>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <div className='space-y-2'>
                        <h2>Name:</h2>
                        <p>Email:</p>
                    </div>
                    <div className='space-y-2'>
                        <h2>{profile?.name}</h2>
                        <p>{profile?.email}</p>
                    </div>
                </div>
                <div className='text-center my-8'>
                    <UpdateProfile handleLoginFunc={handleLoginFunc}></UpdateProfile>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;