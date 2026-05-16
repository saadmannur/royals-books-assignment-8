import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import heroImg from "@/assets/hero-girl.png"
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';

const Banner = () => {
    return (
        <div className=' bg-[#d0e1e7] md:px-10 pt-10'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='text-center'>
                    <h2 className='animate__animated animate__bounce text-[#012e4a] text-2xl md:text-5xl font-bold'>Find Your Next Read</h2>
                    <Link href={"/allbooks"} className='flex items-center justify-center my-5'>
                        <button className='bg-[#036280] text-white flex items-center justify-center gap-2 p-1 md:p-3 rounded-full hover:bg-orange-900 duration-800'><span className='md:text-2xl pb-1'>Browse Now</span> <span className=''><FaArrowRight /></span></button>
                    </Link>
                </div>
                <div >
                    <Image
                        src={heroImg}
                        alt='banner image'
                        width={500}
                        height={300}
                        className='w-full h-full flex items-center justify-center '
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;