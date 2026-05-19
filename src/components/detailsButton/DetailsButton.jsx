"use client"
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const DetailsButton = ({ title }) => {

    const { data } = authClient.useSession();
    // console.log(data);

    const handleBorrowBtn = () => {
        if(!data){
            redirect("/login")
        }
        toast.success(`${title} borrowed successfully`);
    }

    return (
        <div className='flex justify-center items-center pt-5 '>

            <button
                onClick={handleBorrowBtn}
                className='btn text-xl bg-[#036280] text-white'>Borrow This Book
            </button>

        </div>
    );
};

export default DetailsButton;