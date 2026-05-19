"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchSection = () => {
    const searchParams = useSearchParams();
    const router = useRouter()

    const [searchInput, setSearchInput] = useState(searchParams.get("search") || "")

    const handleSearchBtn = (e) => {
        e.preventDefault()
        // console.log(searchInput);

        router.push(`/allbooks?search=${searchInput.trim()}`)
       
    }

    return (
        <div className='flex justify-center items-center my-5'>
            <form
                onSubmit={handleSearchBtn} 
            className='flex gap-5 items-center'>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search here"
                    className="input  md:w-80"
                />

                <button
                    type='submit'
                    className='btn bg-[#012e4a] text-white '>Search</button>

            </form>
        </div>
    );
};

export default SearchSection;