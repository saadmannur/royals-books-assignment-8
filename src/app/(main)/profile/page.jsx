"use client"
import MarqueePage from '@/components/homepage/Marquee';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {

    const { data } = authClient.useSession();
    const user = data?.user;


    return (
        <div className='flex justify-center'>
            <div className='my-10 space-y-5'>
                <h2 className='text-center text-3xl font-bold text-[#012e4a]'>Your Profile Information</h2>
                <div>
                    <Image
                        src={user?.image}
                        alt="something"
                        width={200}
                        height={200}
                        className='rounded-full mx-auto'
                    ></Image>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <div className='space-y-2'>
                        <h2>Name:</h2>
                        <p>Email:</p>
                    </div>
                    <div className='space-y-2'>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <div className='text-center my-8'>
                    <button className='btn bg-[#012e4a] text-white'>Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;