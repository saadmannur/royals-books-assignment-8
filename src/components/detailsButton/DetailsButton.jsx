"use client"
import React from 'react';
import { toast } from 'react-toastify';

const DetailsButton = ({ title }) => {

    const handleBorrowBtn = () => toast.success(`${title} borrowed successfully`)

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