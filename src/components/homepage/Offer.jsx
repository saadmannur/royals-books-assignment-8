import Image from 'next/image';
import React from 'react';
import bookShape from "@/assets/book-shape.png"
import girlShape from "@/assets/girl-shape-2.png"
import Link from 'next/link';

const Offer = () => {
    return (
        <div className='container mx-auto m-5 p-5'>
            <div className='grid md:grid-cols-3 items-center   bg-[#d0e1e7]'>
                <div className='col-span-1'>
                    <Image
                        src={bookShape}
                        alt='books'
                        width={500}
                        height={300}
                        className='w-auto h-[300]'
                    ></Image>
                </div>

                <div className='col-span-1 text-center space-y-8 mx-auto'>
                    <h2 className='text-[#012e4a] text-4xl font-bold'>Get 25% discount in <br /> all kind of super Selling</h2>
                    <Link href={"/allbooks"} className=''>
                        <button className='bg-[#036280] text-white p-2 rounded-2xl '>Shop Now</button>
                    </Link>   
                </div>

                <div className='col-span-1'>
                    <Image
                        src={girlShape}
                        alt='girl with books'
                        width={500}
                        height={300}
                        className='w-auto h-[300]'
                    ></Image>
                </div>
            </div>

        </div>
    );
};

export default Offer;