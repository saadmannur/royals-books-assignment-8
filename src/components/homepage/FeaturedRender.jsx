import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedRender = ({ book }) => {
    // console.log(book);
    const { image_url, author, title } = book;
    return (
        <div className='h-full flex flex-col'>
            <div className='bg-base-300 py-2 rounded-t-xl'>
                <Image
                    src={image_url}
                    alt={title}
                    width={130}
                    height={130}
                    className='w-auto h-60 mx-auto shadow-xl'
                ></Image>
            </div>
            <div className='border-x border-b p-3 border-gray-300 rounded-b-xl flex flex-col flex-1 space-y-5'>
                <div className='flex-1'>
                    <h2 className='text-xl font-semibold'>{title}</h2>
                    <p className='text-sm text-gray-500'>Author: {author}</p>
                </div>
                <div className=' mt-auto'>
                    <Link href={""}>
                        <button className='btn bg-[#036280] text-white w-full'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRender;