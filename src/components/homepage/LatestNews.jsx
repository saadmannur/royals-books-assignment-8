import React from 'react';
import news1 from '@/assets/09.jpg'
import news2 from '@/assets/10.jpg'
import news3 from '@/assets/11.jpg'
import news4 from '@/assets/12.jpg'
import Image from 'next/image';
import { SlCalender } from 'react-icons/sl';
import { FaRegUser } from 'react-icons/fa';

const LatestNews = () => {
    return (
        <div className=' bg-[#d0e1e7] mt-15'>
            <div className='container mx-auto py-15'>
                <div className='text-center m-5'>
                    <h2 className='text-2xl md:text-5xl font-semibold text-[#012e4a]'>Our Latest News</h2>
                    <p className='text-[#036280] my-4'>Books allow us to travel without moving, learn without limits, and grow without boundaries. Through reading, we can explore ancient civilizations, future possibilities, and the deepest parts of human emotion.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 m-5'>

                    <div className='border p-5 bg-white rounded-2xl border-gray-200 shadow space-y-5'>
                        <div>
                            <Image
                                src={news1}
                                alt='news1'
                                width={200}
                                height={200}
                                className='mx-auto w-full'
                            ></Image>
                        </div>
                        <div className='space-y-5'>
                            <div className='text-sm text-[#036280] flex justify-between items-center'>
                                <span className='flex items-center gap-1'>
                                    <span><SlCalender /></span>
                                    <span>Feb 10 , 2025</span>
                                </span>
                                <span className='flex items-center gap-1'>
                                    <span><FaRegUser /></span>
                                    <span>By Admin</span>
                                </span>
                            </div>
                            <h2 className='text-xl font-bold text-[#012e4a]'>New Fantasy Novel Breaks Global Sales Records in First Week.</h2>
                        </div>
                    </div>

                    <div className='border p-5 bg-white rounded-2xl border-gray-200 shadow space-y-5'>
                        <div>
                            <Image
                                src={news2}
                                alt='news2'
                                width={200}
                                height={200}
                                className='mx-auto w-full'
                            ></Image>
                        </div>
                        <div className='space-y-5'>
                            <div className='text-sm text-[#036280] flex justify-between items-center'>
                                <span className='flex items-center gap-1'>
                                    <span><SlCalender /></span>
                                    <span>May 11 , 2025</span>
                                </span>
                                <span className='flex items-center gap-1'>
                                    <span><FaRegUser /></span>
                                    <span>By Admin</span>
                                </span>
                            </div>
                            <h2 className='text-xl font-bold text-[#012e4a]'>Independent Bookstores Report Major Growth in Young Adult Fiction Sales.</h2>
                        </div>
                    </div>

                    <div className='border p-5 bg-white rounded-2xl border-gray-200 shadow space-y-5'>
                        <div>
                            <Image
                                src={news3}
                                alt='news3'
                                width={200}
                                height={200}
                                className='mx-auto w-full'
                            ></Image>
                        </div>
                        <div className='space-y-5'>
                            <div className='text-sm text-[#036280] flex justify-between items-center'>
                                <span className='flex items-center gap-1'>
                                    <span><SlCalender /></span>
                                    <span>July 20 , 2025</span>
                                </span>
                                <span className='flex items-center gap-1'>
                                    <span><FaRegUser /></span>
                                    <span>By Admin</span>
                                </span>
                            </div>
                            <h2 className='text-xl font-bold text-[#012e4a]'>International Book Festival Attracts Famous Authors and Thousands of Readers.</h2>
                        </div>
                    </div>

                    <div className='border p-5 bg-white rounded-2xl border-gray-200 shadow space-y-5'>
                        <div>
                            <Image
                                src={news4}
                                alt='news4'
                                width={200}
                                height={200}
                                className='mx-auto w-full'
                            ></Image>
                        </div>
                        <div className='space-y-5'>
                            <div className='text-sm text-[#036280] flex justify-between items-center'>
                                <span className='flex items-center gap-1'>
                                    <span><SlCalender /></span>
                                    <span>Sept 10 , 2025</span>
                                </span>
                                <span className='flex items-center gap-1'>
                                    <span><FaRegUser /></span>
                                    <span>By Admin</span>
                                </span>
                            </div>
                            <h2 className='text-xl font-bold text-[#012e4a]'>Top Publishers Announce Most Anticipated Books of the Year.</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LatestNews;