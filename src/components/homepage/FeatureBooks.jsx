import { getFeaturedBooks } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import FeaturedRender from './FeaturedRender';

const FeatureBooks = async () => {

    const featuredBooks = await getFeaturedBooks();
    // console.log(featuredBooks);

    return (
        <div className='container mx-auto my-10 px-2 md:px-0'>
            <div className='flex justify-between items-center'>
                <div className='hidden md:block'></div>
                <div className='text-center space-y-5'>
                    <h2 className='text-2xl md:text-5xl font-semibold text-[#012e4a]'>Featured Books</h2>
                    <p className='text-[#036280] text-sm hidden md:block'>Books preserve knowledge and stories that help us learn, think critically, and explore new worlds beyond our own experience.</p>
                </div>
                <Link href={"/allbooks"}>
                    <button className='flex items-center md:gap-4 font-semibold border p-1 md:p-3 rounded-full border-gray-500 border-dotted text-[#036280]'><span>Explore More</span> <FaArrowRight></FaArrowRight> </button>
                </Link>
            </div>
            <p className='text-[#036280] text-sm md:hidden text-center'>Books preserve knowledge and stories that help us learn, think critically, and explore new worlds beyond our own experience.</p>
            <div className='md:grid grid-cols-3 lg:grid-cols-4 m-5 md:m-10 md:gap-10 space-y-5 md:space-y-0'>
                {
                    featuredBooks.map(book => <FeaturedRender key={book.id} book={book}></FeaturedRender>)
                }
            </div>

        </div>
    );
};

export default FeatureBooks;