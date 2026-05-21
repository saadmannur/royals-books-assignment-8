import Image from 'next/image';
import React from 'react';
import stephen from "@/assets/Stephen.jpg"
import rowling from "@/assets/Rowling.jpg"
import whm from "@/assets/whm.jpg"
import heart from "@/assets/heart.jpg"
import laguna from "@/assets/laguna.jpg"

const Author = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='text-center m-5'>
                <h2 className='text-2xl md:text-5xl font-semibold text-[#012e4a]'>Featured Author</h2>
                <p className='text-[#036280] my-4'>Reading books is one of the most powerful habits a person can develop. Books expand knowledge, improve imagination, strengthen communication skills, and help people understand both themselves and the world around them</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5  m-5'>
                <div className='border border-gray-200 rounded-2xl bg-white shadow-md p-4'>
                    <div className=''>
                        <Image
                            src={stephen}
                            alt='stephen'
                            width={200}
                            height={200}
                            className='rounded-full w-50 h-50 mx-auto'
                        ></Image>
                    </div>
                    <div className='text-center border-2 m-5 p-3 border-dotted border-[#012e4a]'>
                        <h2 className='font-bold text-[#012e4a] text-xl'>Stephen King</h2>
                        <p className='text-[#036280] text-sm mt-2'>Published Books: 65</p>
                    </div>
                </div>

                
                <div className='border border-gray-200 rounded-2xl bg-white shadow-md p-4'>
                    <div className=''>
                        <Image
                            src={rowling}
                            alt='rowling'
                            width={200}
                            height={200}
                            className='rounded-full w-50 h-50 mx-auto'
                        ></Image>
                    </div>
                    <div className='text-center border-2 m-5 p-3 border-dotted border-[#012e4a]'>
                        <h2 className='font-bold text-[#012e4a] text-xl'>J. K. Rowling</h2>
                        <p className='text-[#036280] text-sm mt-2'>Published Books: 15</p>
                    </div>
                </div>

                <div className='border border-gray-200 rounded-2xl bg-white shadow-md p-4'>
                    <div className=''>
                        <Image
                            src={whm}
                            alt='Agatha Christie'
                            width={200}
                            height={200}
                            className='rounded-full w-50 h-50 mx-auto'
                        ></Image>
                    </div>
                    <div className='text-center border-2 m-5 p-3 border-dotted border-[#012e4a]'>
                        <h2 className='font-bold text-[#012e4a] text-xl'>Agatha </h2>
                        <p className='text-[#036280] text-sm mt-2'>Published Books: 85</p>
                    </div>
                </div>

                <div className='border border-gray-200 rounded-2xl bg-white shadow-md p-4'>
                    <div className=''>
                        <Image
                            src={heart}
                            alt='Paulo Coelho'
                            width={200}
                            height={200}
                            className='rounded-full w-50 h-50 mx-auto'
                        ></Image>
                    </div>
                    <div className='text-center border-2 m-5 p-3 border-dotted border-[#012e4a]'>
                        <h2 className='font-bold text-[#012e4a] text-xl'>Paulo Coelho</h2>
                        <p className='text-[#036280] text-sm mt-2'>Published Books: 30</p>
                    </div>
                </div>

                <div className='border border-gray-200 rounded-2xl bg-white shadow-md p-4'>
                    <div className=''>
                        <Image
                            src={laguna}
                            alt='Dan Brown'
                            width={200}
                            height={200}
                            className='rounded-full w-50 h-50 mx-auto'
                        ></Image>
                    </div>
                    <div className='text-center border-2 m-5 p-3 border-dotted border-[#012e4a]'>
                        <h2 className='font-bold text-[#012e4a] text-xl'>Dan Brown</h2>
                        <p className='text-[#036280] text-sm mt-2'>Published Books: 10</p>
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default Author;